import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book-store',
  templateUrl: './add-book-store.component.html',
  styleUrls: ['./add-book-store.component.css']
})
export class AddBookStoreComponent {
  baseurl="https://localhost:5001/api"
  form={
    title: '',
    year: '',
    price: '',
    author: '',
  }
  errors!:[];
  error = {
    title: '',
    year: '',
    price: '',
    author: '',

  }; 
  constructor(private http:HttpClient,private toastr: ToastrService) { }
  ngOnInit(): void {
   
  }
  onSubmit(): void {
      const newBook = this.form ;
      this.http.post(this.baseurl+"/gallery/book",this.form).subscribe(() => {
        this.toastr.success('!', 'Product Added Successfully!');
        this.reset()
       
    },(error:any)=>{
      this.toastr.error('!', 'Product Added Failed!');
      if(error && error.error&& error.error.errors)      {
        this.errors=error.error.errors
      }
    });

  }
  reset() {
      this.form={ title: '',
      year: '',
      price: '',
      author: '',}
  }
  

validate(): boolean {
  this.error.title = '';this.error.price = '';
  if (!this.form.title || this.form.title.length <=0) {
    this.error.title = "Title is required";
    return false;
  }
 
  return true;
}

}
