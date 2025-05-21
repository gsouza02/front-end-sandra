import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule]
})
export class AppComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email === 'admin@example.com' && this.password === '123456') {
      alert('Login bem-sucedido!');
    } else {
      alert('Credenciais inválidas.');
    }
  }
}
