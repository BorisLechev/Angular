import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username : string;

  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('name'); // да визуализира Hello, name name е от back-end
  }
}
