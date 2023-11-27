import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../_services/cart.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-books-gallery',
  templateUrl: './books-gallery.component.html',
  styleUrls: ['./books-gallery.component.css'],

})
export class BooksGalleryComponent  {

  @Input() message!: string; 
   @Output() clicked = new EventEmitter<string>(); 
  books: any;
  book:Book={
    Id:0,
    'Title':'',
    'Year':1900,
    'Author':'',
  Price:0

  }
  constructor(private http: HttpClient,  private _cart: CartService) { }
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/gallery/book').subscribe({
      //what happened when we get the data
      next: (response: any) => this.books= response,
      error: () => console.log(Error),
      complete: () => console.log('request completed')
    });
  }
  onClick() { 
  this.clicked.emit(this.message); 
  } 
  addToCart(id:number) {
    
    debugger
    console.log(id)
    this._cart.addToCart(id);
    window.alert('Your product has been added to the cart!');
  }
}

	