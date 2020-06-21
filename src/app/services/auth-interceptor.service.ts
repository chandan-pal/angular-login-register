import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const clonedReq = req.clone({
          headers: req.headers.set("Authorization", "Bearer " + user.jwt)
      });
      return next.handle(clonedReq);
    } else {
      return next.handle(req);
    }
  }
}
