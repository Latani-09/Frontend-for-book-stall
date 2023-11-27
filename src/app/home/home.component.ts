import { Component, OnInit ,NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksGalleryComponent } from '../books-gallery/books-gallery.component';
import { Book } from '../models/Book';
import { CartService } from '../_services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  registerMode = false;
  //message="Welcome";
  // onChildClicked(message: string) { 
	// 	console.log(message); 
	// 	} 
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
  constructor(private http:HttpClient, private _cart: CartService) { }

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





