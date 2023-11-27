import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  baseurl="https://localhost:5001/api"
  form={
    username: '',
    password: '',

  }
  errors!:[];
  error = {
    username: '',
    password: '',


  }; 
  constructor(private http:HttpClient,private toastr: ToastrService,private account:AccountService) { }
  ngOnInit(): void {
    console.log("reached register component")
   
  }
  onSubmit(): void {
    const newuser = this.form ;
    debugger
    this.account.register(this.form.username,this.form.password).subscribe(() => {
      this.toastr.success('!', 'user registered');
      this.reset()
  },(error:any)=>{
    //this.toastr.error('!', 'user Added Failed!');
    debugger
    this.toastr.error(error.error)
    if(error && error.error&& error.error.errors)      {
      this.errors=error.error.errors
      this.toastr.error(error.error.errors);

    }
  });

}
reset() {
    this.form={ username: '',
    password: '',
}

}}
