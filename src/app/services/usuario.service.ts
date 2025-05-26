import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestsService } from './requests.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private request: RequestsService) {}

  constroiUsuario(): Observable<User> {
    return this.request.makeRequest('https://services.dipes.intranet.bb.com.br/login/info', 'GET').pipe(
      map(response => ({
        nomeguerra: response['dados']['nomeguerra'],
        matricula: response['dados']['matricula'],
        coddep: response['dados']['coddep'],
        coduortrabalho: response['dados']['coduortrabalho'],
        url_imagem: `https://humanograma.intranet.bb.com.br/avatar/${response['dados']['matricula']}`
      }))
    );
  }
}
