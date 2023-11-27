import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';
import { tokenGetter } from '../app.module';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { map } from 'rxjs/operators';
import { currentUser } from '../models/current-user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentUserSource = new ReplaySubject<currentUser|null>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {}
  baseUrl="https://localhost:5001/api/account/"
  public isAuthenticated(): boolean {
       let token: any = localStorage.getItem('token');
    console.log(token)
    // Check whether the token is expired and return
    // true or false
    console.log(!this.jwtHelper.isTokenExpired(token));
    return !this.jwtHelper.isTokenExpired(token);
  }
  login(username: string, password: string) {
    debugger
    return this.http.post<any>(`${this.baseUrl}login`, {
      username: username,
      password: password,
    });
  }
  
  public getToken(): any {
    
    const token= localStorage.getItem('token');
    console.log(token)
    debugger
    return token;
  }
  public register(username: string, password:string) {
    return this.http.post<any>(`${this.baseUrl}register`, {
      username: username,
      password: password,
 
    });
  }
  public delete(Id: number) {
    debugger
    return this.http.delete(`${this.baseUrl}delete/${Id}`).subscribe({
      //what happened when we get the data
      next: (response: any) => console.log(response),
      error: () => console.log(Error),
      complete: () => console.log('request completed')
    });
  }
  username='';
  public setcurrentUser(user:currentUser){
const roles=this.getUserRole();
console.log("user roles")
console.log(roles)
Array.isArray(roles)? user.roles=roles:user.roles.push(roles);
localStorage.setItem('user',JSON.stringify(user));
this.currentUserSource.next(user);

  }
  public setusername(currentname:string){
    this.username=currentname;
  }
  public edit(username:string ,password:string) {
    return this.http.post<any>(`${this.baseUrl}update`,{
      username:username,
      password:password
    })  }

  logout() {
    
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
   // this.isAuthenticated();

  }
  
  public getUserRole() {
    const token=this.getToken()
    let jwtData = this.jwtHelper.decodeToken(token);
    console.log(jwtData.role);
    return jwtData.role
}

  
}
