import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RequestsService } from '../../services/requests.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private request = inject(RequestsService);

  // constructor(private user: UserService) {}

  items: MenuItem[] | undefined;

  nome = '';
  urlimagem = '';
  mostraItems = false;

  ngOnInit() {
    // this.obterDados();
    this.montaItems();
  }

  // obterDados(): void {
  //   this.user.constroiUsuario().subscribe({
  //     next: (usuario) => {
  //       this.nome = usuario.nomeguerra;
  //       this.urlimagem = usuario.url_imagem;
  //       this.mostraItems = uors.includes(usuario.coduortrabalho);
  //       this.montaItems();
  //     },
  //     error: (error) => {
  //       console.error('Erro ao obter usuário', error);
  //     },
  //   });
  // }

  montaItems() {
    this.items = [
          {
            label: 'Home',
            routerLink: 'home',
          },
          {
            label: 'Faça um pedido',
            routerLink: 'feed',
          }
        ]
  }
}
