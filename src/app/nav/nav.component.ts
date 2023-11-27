import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AccountService } from '../_services/account.service';
//import {ToastrService} from 'ngx-toastr'
import { AuthResponse } from '../models/auth-response';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  constructor(private account:AccountService, private router: Router) { }
  isAuthenticated = false;
  checkAuthentication() {
   this.isAuthenticated = this.account.isAuthenticated();
  }
  Logout(){
    this.account.logout();
    this.checkAuthentication();

  }
  form={
    username : "",
    password:""
  }
  errors!:[];
  error = {
    name: '',
    password: ''
  };  
  
  ngOnInit(): void {
   this.checkAuthentication();
  }

  Login(){
    if (this.validate()) {
   
    this.account.login(this.form.username,this.form.password).subscribe((authResponse: AuthResponse) => {
      localStorage.setItem('token', JSON.stringify(authResponse.token));
      console.log(authResponse.token)
      //this.toastr.success('!', 'Login Successfully!');
      this.router.navigateByUrl(`/`);
      
    },error=>{
      //this.toastr.error('', 'Login Failed!');
      console.log(error);
      if(error && error.error&& error.error.errors)      {
        this.errors=error.error.errors
      }
    })
  }

  }
  validate(): boolean {
    this.error.name = '';this.error.password = '';
    if (!this.form.username || this.form.username.length <=0) {
      this.error.name = "Usename is required";
      return false;
    }
     else if (!this.form.password || this.form.password.length <=0) {
        this.error.password = "Password is required";
      return false;
    } else { this.error.name = '';this.error.password = '' }
  
   
    return true;
  }

}
