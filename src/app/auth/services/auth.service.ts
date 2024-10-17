import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly http = inject(HttpClient);
  private url = `http://localhost:3000/api`;

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, { username, password });
  }
}
