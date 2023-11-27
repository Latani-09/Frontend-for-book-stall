import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public account:AccountService) {}
   
  
    
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    const token=this.account.getToken();
    if (!(token==null)){

      console.log("token found to attach with header");
    request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  debugger}
    else{
      console.log("no token found to attach with header");
     // request.clone();

    }
    return next.handle(request);
  }
}
