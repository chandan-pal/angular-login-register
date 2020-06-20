import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<User>;

  constructor
  (
    private router: Router,
    private http: HttpClient
  ) { }

    login(email: string, password: string) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      return this.http.post<User>(environment.authUrl, {"userEmail": email, "password": password}, httpOptions)
        .pipe(map(user => {
          localStorage.setItem('id_token', user.jwt);
          localStorage.setItem('expires_at', user.expDate);
          return true;
        }))
    }

    isLoggedIn() {
      const token = localStorage.getItem('id_token');
      const sExpDate = localStorage.getItem('expires_at');
      if (token && sExpDate && new Date().getTime() < new Date(sExpDate).getTime())
      {
        return true;
      }
      return false;
    }
}
