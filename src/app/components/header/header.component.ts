import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RequestsService } from '../../services/requests.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DrawerComponent } from '../drawer/drawer.component';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, MatIconModule, DrawerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private request = inject(RequestsService);

  constructor(private router: Router) {}

  items: MenuItem[] | undefined;

  nome = '';
  email = '';
  telefone = '';
  data_nascimento = '';
  data_cadastro = '';
  endereco = '';
  cpf = '';
  mostraItems = false;
  visible = false;
  dadosCarregados = false;
  qtdPedidos = 0;

  ngOnInit() {
    this.obterDados();
    this.montaItems();
  }

  toggleDrawer() {
    this.visible = !this.visible;
  }

  obterDados() {
    const cliente = localStorage.getItem('clienteId');
    if (!cliente) {
      console.error('Cliente ID não encontrado no localStorage');
      return;
    }
    this.request.makeRequest(`http://localhost:8000/user?id=${cliente}`, 'GET').subscribe({
      next: (response) => {
        this.nome = response[0]['nome'];
        this.cpf = response[0]['cpf'];
        this.email = response[0]['email'];
        this.telefone = response[0]['telefone'];
        this.data_nascimento = response[0]['data_nascimento'];
        this.data_cadastro = response[0]['data_cadastro'];
        this.endereco = response[0]['endereco'];
        this.dadosCarregados = true;
        this.obterQtdPedidos();
      },
      error: (error) => {
        console.error('Erro ao obter usuário', error);
      },
    })
  }

  obterQtdPedidos() {
    const cliente = localStorage.getItem('clienteId');
    this.request.makeRequest(`http://localhost:8000/qtd_pedidos?id_cliente=${cliente}`, 'GET').subscribe({
      next: (response) => {
        this.qtdPedidos = response;
      },
      error: (error) => {
        console.error('Erro ao obter pedidos', error);
      },
  })
}

  formatarData(data: string): string {
  if (!data) return '';
  const [ano, mes, dia] = data.split('T')[0].split('-');
  return `${dia}/${mes}/${ano}`;
}

logout() {
  localStorage.removeItem('clienteId');
  this.router.navigate(['/login']);
}

  montaItems() {
    this.items = [
          {
            label: 'Home',
            routerLink: '/home',
          },
          {
            label: 'Faça um pedido',
            routerLink: '/cardapio',
          }
        ]
  }
}
