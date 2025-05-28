import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarouselModule } from 'primeng/carousel';
import { RequestsService } from '../../services/requests.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeaderComponent, CarouselModule, CommonModule]
})
export class HomeComponent implements OnInit {
  // Lógica futura para pedidos e catálogo

  nome = '';
  endereco = '';
  telefone = '';
  email = '';
  constructor (private request: RequestsService) {}
  ngOnInit() {
    
    this.obterDados();
  }
  
  obterDados() {
    this.request.makeRequest('http://localhost:8000/restaurante', 'GET').subscribe({
      next: response => {
        this.nome = response[0]['nome'];
        this.endereco = response[0]['endereco'];
        this.telefone = response[0]['telefone'];
        this.email = response[0]['email'];
      },
      error: error => {
        console.error('erro no request');
      }
    });
  }
  images = [
    {
      img: 'cantina.jpg',
      alt: 'Imagem 1',
      title: 'Imagem 1'
    },
    {
      img: 'pizza1.jpg',
      alt: 'Imagem 2',
      title: 'Imagem 2'
    },
    {
      img: 'pizza2.jpg',
      alt: 'Imagem 3',
      title: 'Imagem 3'
    },
    // {
    //   img: 'rony.jpg',
    //   alt: 'Imagem 4',
    //   title: 'Imagem 4'
    // }
  ];


}
