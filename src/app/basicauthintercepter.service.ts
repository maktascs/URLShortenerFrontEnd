import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicauthintercepterService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(localStorage.getItem('username') && localStorage.getItem('basicAuth')){
      req = req.clone({
        setHeaders:{
          Authorization: localStorage.getItem('basicAuth')
        }
      })
    }
    return next.handle(req);
  }

  constructor() { }
}
