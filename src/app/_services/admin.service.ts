import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  username!:string|undefined;
  baseUrl=environment.baseUrl

  constructor(private http:HttpClient,private account:AccountService) {  }
  getUserwithRoles(){
   return this.http.get<User[]>(this.baseUrl+'admin/get-user-with-roles');
  }
  editUserRoles(){
    
    this.account.currentUser$.subscribe(response=> this.username=response?.username)
    this.http.post(this.baseUrl+`admin/edit-user-role/${this.username}`,{})
  }
}
