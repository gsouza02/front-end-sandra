import { Component, Input } from '@angular/core';
import Sabor from './sabor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sabor',
  templateUrl: './sabor.component.html',
  styleUrl: './sabor.component.css',
  imports: [CommonModule]
})
export class SaborComponent {
  @Input() sabor: Sabor | undefined;
  quantidade: number | undefined;

  adicionar() {
  if (this.sabor) {
    this.sabor.quantidade++;
  }
}

remover() {
  if (this.sabor && this.sabor.quantidade > 0) {
    this.sabor.quantidade--;
  }
}
}