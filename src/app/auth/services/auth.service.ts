import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private user: any = null;

  private readonly http = inject(HttpClient);
  private url = `${environment.apiUrl}/auth`;

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/login`, { username, password });
  }

  isAuthenticated() : boolean{
    //return !!this.user;
    if( !localStorage.getItem('user') ) return false;
    return true;
  }

  setUser( user: any ):void{
    //this.user = user;
    localStorage.setItem('user', JSON.stringify( user ));
  }

  getUser(){
    return this.user
  }
}
