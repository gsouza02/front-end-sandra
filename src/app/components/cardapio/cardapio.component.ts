import { Component } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import Sabor from '../sabor/sabor';
import { CommonModule } from '@angular/common';
import  { SaborComponent } from '../sabor/sabor.component';
import { HeaderComponent } from '../header/header.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cardapio',
  imports: [CommonModule, SaborComponent, HeaderComponent],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})
export class CardapioComponent {

  constructor (private requestsService: RequestsService, private router: Router) { }

  cardapio: Sabor[] = [];

  ngOnInit() {
    this.obterCardapio();
  }


  obterCardapio() {
  this.requestsService.makeRequest('http://localhost:8000/cardapio', 'GET').subscribe({
    next: (response: Sabor[]) => {
      // Adiciona quantidade = 0 para cada sabor
      this.cardapio = response.map(sabor => ({ ...sabor, quantidade: 0 }));
    },
    error: (error) => {
      console.error('Erro ao obter cardápio:', error);
    }
  });   
}

  finalizarPedido() {
  const id_cliente =  localStorage.getItem('clienteId');
  this.requestsService.makeRequest(`http://localhost:8000/fazer_pedido?id_cliente=${id_cliente}`, 'POST')
    .subscribe({
      next: (res) => {
        this.adicionarItensSelecionados();
      },
      error: (err) => {
        alert('Você já fez 1 pedido hoje!');
      }
    });
}

adicionarItensSelecionados() {
  const selecionados = this.cardapio.filter(sabor => sabor.quantidade && sabor.quantidade > 0);
  const id_cliente = localStorage.getItem('clienteId');

  selecionados.forEach(sabor => {
    const params = {
      id_cliente: id_cliente,
      quantidade: sabor.quantidade,
      id_produto: sabor.id_produto,
    };
    this.requestsService.makeRequest('http://localhost:8000/adicionar_item', 'POST', params)
      .subscribe({
        next: (res) => {
          // sucesso individual
        },
        error: (err) => {
          // erro individual
          console.error('Erro ao adicionar item:', params, err);
        }
      });
    });
    alert('Pedido realizado com sucesso!');
    this.router.navigate(['/pedidos']);
}

get precoTotal(): number {
  return this.cardapio
    .filter(sabor => sabor.quantidade && sabor.quantidade > 0)
    .reduce((total, sabor) => total + (sabor.preco * sabor.quantidade), 0);
}

hasSelecionados(): boolean {
  return this.cardapio.some(sabor => sabor.quantidade && sabor.quantidade > 0);
}


}
