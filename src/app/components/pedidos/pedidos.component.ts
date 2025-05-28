import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsService } from '../../services/requests.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private requestsService: RequestsService) {}

  ngOnInit() {
    const id_cliente = localStorage.getItem('clienteId');
    this.requestsService.makeRequest(`http://localhost:8000/pedidos?id_cliente=${id_cliente}`, 'GET')
      .subscribe({
        next: (response: any) => {
          this.pedidos = response.pedidos || [];
        },
        error: (err) => {
          console.error('Erro ao buscar pedidos:', err);
        }
      });
  }
}