import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'booking app';
  users: any;

  //dependency injection of http into app component
  constructor(private http: HttpClient) { }
  //lifecycle hook
  ngOnInit(): void {
    // this.http.get('https://localhost:5001/api/users').subscribe({
    //   //what happened when we get the data
    //   next: response => this.users = response,
    //   error: error => console.log(Error),
    //   complete: () => console.log('request completed')
    // });
  }

}
