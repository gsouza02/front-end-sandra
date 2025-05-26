import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  makeRequest(url: string, method: string, body?: any, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    headers = headers || new HttpHeaders();
    params = params || new HttpParams();

    switch (method.toUpperCase()) {
      case 'GET':
        return this.http.get<any>(url, { headers, withCredentials: true });
      case 'POST':
        return this.http.post<any>(url, body, { headers, params, withCredentials: true });
      case 'PUT':
        return this.http.put<any>(url, body, { headers, params, withCredentials: true });
      case 'DELETE':
        return this.http.delete<any>(url, { headers, params, withCredentials: true });
      default:
        throw new Error(`Método HTTP não suportado: ${method}`);
    }
  }
}
