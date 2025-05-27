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
  constructor (private request: RequestsService) {}
  ngOnInit() {
    
    this.obterDados();
  }
  
  obterDados() {
    this.request.makeRequest('http://localhost:8000/teste', 'GET').subscribe({
      next: response => {
        this.nome = response[1]['tx_ctu']
      },
      error: error => {
        console.error('erro no request');
      }
    });
  }
  images = [
    // {
    //   img: 'molde-carrossel-portal-super.png',
    //   alt: 'Imagem 1',
    //   title: 'Imagem 1'
    // },
    {
      img: 'logo.png',
      alt: 'Imagem 2',
      title: 'Imagem 2'
    }
    // {
    //   previewImageSrc: 'assets/images/3.jpg',
    //   alt: 'Imagem 3',
    //   title: 'Imagem 3'
    // }
  ];


}
