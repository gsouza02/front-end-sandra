import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  standalone: true,
  imports: [DrawerModule]
})
export class DrawerComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();


  @Input() nome = '';
  @Input() email = '';
  @Input() telefone = '';
  @Input() cpf = '';
  @Input() dataNascimento = '';
  @Input() dataCadastro = '';
  @Input() endereco = '';
  onHideDrawer() {
    this.visibleChange.emit(false);
  }
}