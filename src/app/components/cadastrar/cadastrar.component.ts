import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RequestsService } from '../../services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
  imports: [ReactiveFormsModule, FormsModule]
})
export class CadastrarComponent {
  nome = '';
  email = '';
  telefone = '';
  endereco = '';
  dataNascimento =''
  senha = '';
  cpf = '';

  constructor(private request: RequestsService, private router: Router) {}



  onSubmit() {
    if (!this.nome || !this.email || !this.telefone || !this.endereco || !this.dataNascimento || !this.senha || !this.cpf) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return; 
    }

    if (!this.email.includes('@')) {
      alert('Por favor, insira um email válido.');
      return; 
    } 

    if (!/^\d+$/.test(this.cpf) || this.cpf.length !== 11) {
    alert('Insira um CPF válido.');
    return;
  }

  if (!/^\d+$/.test(this.telefone) || this.telefone.length != 11) {
    alert('Insira um telefone válido.');
    return;
  }


    const params = {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      endereco: this.endereco,
      data_nascimento: this.dataNascimento,
      senha: this.senha,
      cpf: this.cpf
    }

    this.request.makeRequest('http://localhost:8000/cadastro', 'POST', params).subscribe({
      next: (response) => {
        console.log('Cadastro realizado com sucesso:', response);
        this.router.navigate(['/login']); // Redireciona para a página de login após o cadastro
        // Aqui você pode redirecionar o usuário ou exibir uma mensagem de sucesso
      } ,
      error: (error) => {  
        console.error('Erro ao realizar cadastro:', error);
        // Aqui você pode exibir uma mensagem de erro para o usuário
      } 
  })
}
}
