import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  testInterceptor() {
    this.http.get("http://127.0.0.1:8080/test").subscribe(
      data => {
        console.log(data);
        console.log('Token validated!')
      },
      error => {
        console.log(error);
      }
    )
  }

}
