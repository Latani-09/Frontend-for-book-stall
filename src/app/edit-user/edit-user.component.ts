import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';
import { User } from '../models/user';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class edituserComponent {
  user!: User;

   currentuser=this.account.username;
  baseurl="https://localhost:5001/api"
  form={
    id:0,
    password: '',

  }
  errors!:[];
  error = {

    password: '',


  }; 
  constructor(private http:HttpClient,private toastr: ToastrService,private account:AccountService,private _Activatedroute:ActivatedRoute) { }
  
 
  ngOnInit(): void {
    let currentuser=this.account.username;
  }
    onSubmit(): void {
     let newuser = {
      username:this.account.username,


    }

    this.account.edit(newuser.username,this.form.password).subscribe(() => {
      this.toastr.success('account upsate success!','success!',{
        timeOut:3000,easing:'ease-in',
        closeButton:true,positionClass:'toast-center'})
      this.reset()
      
     
  },(error:any)=>{
    this.toastr.error('!', 'user edit Failed!');
    if(error && error.error&& error.error.errors)      {
      this.errors=error.error.errors
    }
  });

}
reset() {
    this.form={   id:0,  password: '',
}

}}
