import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  baseUrl="https://localhost:5001/api";
  users:User[]=[]
  constructor(private http: HttpClient,private account:AccountService,private router:Router,private admin:AdminService) { }
  ngOnInit(): void {
    const token=this.account.getToken()
    console.log("token to be sent with header" +token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      })
    };
    console.log(httpOptions);
    debugger
    this.http.get('https://localhost:5001/api/users',httpOptions).subscribe({
      
      //what happened when we get the data
      next: (response: any) => this.users = response,
      error: () => console.log(Error),
      complete: () => console.log('request completed')
    });
  }
 
  editUser(name:string){
   
    this.account.setusername(name);

    this.router.navigate(['/edit-user']);

  }
  deleteUser(user: any) {
    const confirmation = window.confirm('Are you sure you want to delete this user?');
    if (confirmation) {
      console.log("id to DELETE")
      console.log(user.id)
      this.account.delete(user.id);
    }
   location.reload();
  }


  getUserwithRoles(){
    this.admin.getUserwithRoles().subscribe({
      next:(response: User[])=> this.users=response,

    })


}}

// function hello() {
//   alert('Hello');
//   }
//   document.getElementById("hellobutton").addEventListener("click", hello);