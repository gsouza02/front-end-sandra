import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent {
  title = 'Pizzaria Express';
  menu = [
    { nome: 'Margherita', preco: 30, descricao: 'Molho de tomate, muçarela e manjericão', imagem: 'assets/margherita.jpg' },
    { nome: 'Pepperoni', preco: 35, descricao: 'Molho de tomate, muçarela e pepperoni', imagem: 'assets/pepperoni.jpg' }
  ];
}
