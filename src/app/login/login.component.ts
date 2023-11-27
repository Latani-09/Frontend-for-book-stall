import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { AuthResponse } from '../models/auth-response';
import { ToastrService } from 'ngx-toastr';
import { NavComponent } from '../nav/nav.component';
import { User } from '../models/user';
import { currentUser } from '../models/current-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private account:AccountService, private router: Router ,private toastr:ToastrService) { 

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
}

Login(){
  if (this.validate()) {
 
  this.account.login(this.form.username,this.form.password).subscribe((authResponse: AuthResponse) => {
    debugger
    localStorage.setItem('token', JSON.stringify(authResponse.token));

    console.log("token set in local storage"+ authResponse.token);
    this.toastr.toastrConfig.positionClass= "toast-center-center";
    this.toastr.toastrConfig.preventDuplicates=true;
    this.toastr.success( 'Login Successfully!');
    if (authResponse) {
      debugger
      const currentuser:currentUser={
        username:authResponse.username,
        roles:this.account.getUserRole(),
        token:authResponse.token

      }
      var userAuthenticated=this.account.isAuthenticated()
      this.account.setcurrentUser(currentuser)

      if (userAuthenticated){
        debugger
        this.router.navigateByUrl(`/`);}
        
      

    }
  },error=>{
    this.toastr.toastrConfig.preventDuplicates=true;
    
    this.toastr.error(error.error);
    
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