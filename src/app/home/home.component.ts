import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user;
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

}
