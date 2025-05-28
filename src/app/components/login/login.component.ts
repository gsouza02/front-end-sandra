import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestsService } from '../../services/requests.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 email: string = '';
  password: string = '';

  constructor(private request: RequestsService, private router: Router) { }

  onSubmit() {
  const params = {
    email: this.email,
    senha: this.password
  }
  this.request.makeRequest('http://localhost:8000/login', 'POST', params).subscribe({
    next: (response) => {     
      // Supondo que o id do cliente venha como response.id
      localStorage.setItem('clienteId', response.id_cliente);
      // Redirecione ou faça outra ação
      this.router.navigate(['/home']);
    },
    error: (error) => {
      alert('Email ou senha incorretos');
    }
  });
}
}
