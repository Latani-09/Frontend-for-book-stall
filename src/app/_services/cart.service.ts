import { Injectable, enableProdMode } from '@angular/core';
import { Book } from '../models/Book';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { AccountService } from './account.service';
import { Cartitem } from '../models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
baseUrl="https://localhost:5001/api/"
items:any=[]
i:number=0;
book!:Book;
  constructor(private http:HttpClient, private account:AccountService ) { }

addToCart(id :number){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(this.account.getToken())}`
    })
  };
  console.log(id);
 
  this.http.post(this.baseUrl+`cart/add-to-cart/${id}`,httpOptions).subscribe(
    {next:(response)=>console.log(response),
    error:()=>console.log(Error),
  
  }
  )
  //backend response to the request but this.book is not assign to that.   
  debugger 
  // this.items.push(this.book);
  // this.i+=1;
  // console.log(this.items[this.i].Title);
}
getItems(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(this.account.getToken())}`
    })
  };
  // this.http.get('https://localhost:5001/api/cart/view-cart',httpOptions).subscribe(
  //   {next:(response:any) =>this.items=response,
  //   error:()=> console.log(Error),
  //   complete:()=> console.log("cart items retrieved")
  //   }
  debugger
  
  //console.log(this.items[0].bookId)
  var user_id=2
  return this.http.get(`https://localhost:5001/api/cart/view-cart/${user_id}`,httpOptions)
    
}
clearCart(){
  this.http.delete(this.baseUrl+"cart/clear")
  this.items=[];
}
}
