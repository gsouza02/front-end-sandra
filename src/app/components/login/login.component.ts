import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
