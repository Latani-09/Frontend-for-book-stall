import { Component } from '@angular/core';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ratebook',
  templateUrl: './ratebook.component.html',
  styleUrls: ['./ratebook.component.css']
})
export class ratebookComponent {
  book={Name:"",
rating:10}
  selectedbook=""


  constructor(private http:HttpClient){}
  baseUrl="https://localhost:5001/api/"
  onSubmit() {
    // Handle form submission (e.g., send movie data to the server)
    this.http.get((this.baseUrl+"gallery/movie/"+this.selectedbook,this.selectedbook)).subscribe(
      { next: (response: any) => this.book = response,
        error: () => console.log(Error),
        complete: () => console.log('request completed')}
    );
    console.log( this.book.Name);
  }
  ngOnInit(): void {
  }
}
