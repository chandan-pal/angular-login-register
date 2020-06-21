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
        })
      };
      return this.http.post<User>(environment.authUrl, {"userEmail": email, "password": password}, httpOptions)
        .pipe(map(user => {
          localStorage.setItem('user', JSON.stringify(user));
          return true;
        }))
    }

    isLoggedIn() {
      const user = JSON.parse(localStorage.getItem('user')) as User;
      if (user) {
        const token = user.jwt;
        const sExpDate = user.expDate;
        if (token && sExpDate && new Date().getTime() < new Date(sExpDate).getTime())
        {
          return true;
        }
      }
      return false;
    }

    register(user: User) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
      return this.http.post(environment.registrationUrl, user, httpOptions)
    }
}
