import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { Cartitem } from '../models/cartitem';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.css']
})


export class CartviewComponent implements OnInit {
  cartItems: Cartitem[] = [];

  constructor(private cart_service: CartService, private http: HttpClient, private account: AccountService) {}
  body={
    id: '',
    username: '',
    token: ''}
  ngOnInit(): void {
    const httpOptions = this.getHttpOptions();
   console.log(httpOptions)
    const httpbody=this.body;
  debugger
    this.http.get('https://localhost:5001/api/cart/view-cart', httpOptions).subscribe({
      next: (response: any) => {
        this.cart_service.items = response;
        this.cartItems = response;
      },
      error: (error) => console.error('Error fetching cart items:', error),
      complete: () => console.log('Request completed')
    });
  }

  clear(): void {
    this.cart_service.clearCart();
    this.cartItems = [];
  }

  delete(id: number): void {
   this.cart_service.clearCart()
  }

  getObjectById(id: number): Cartitem | null {
    for (const obj of this.cartItems) {
      if (obj.bookId === id) {
        return obj;
      }
    }
    return null;
  }

  private getHttpOptions(): { headers: HttpHeaders} {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(this.account.getToken())}`,
        'user_id':this.account.username 
      })

    };
  }

}

/*
export class CartviewComponent implements OnInit{
  cartItems=this.cart_service.items;
  constructor(private cart_service:CartService, private http:HttpClient,private account:AccountService){
  }
  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(this.account.getToken())}`
      })
    };
    this.http.get('https://localhost:5001/api/cart/view-cart',httpOptions).subscribe({
    //what happened when we get the data
    next: (response: any) => this.cart_service.items = response,
    error: (e) => console.log(e),
    complete: () => console.log('request completed')
  });
   debugger
  }
clear(){
  this.cart_service.clearCart();
  this.cart_service.items=[]
}
delete(id:number){

}
 getObjectById(id:number) {
  for (const obj of this.cart_service.items) {
    if (obj.bookId === id) {
      return obj;
    }
  }
  return null; // Return null if object with given ID is not found
}
}
*/