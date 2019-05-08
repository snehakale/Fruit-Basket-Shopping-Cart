import { Component, OnInit } from '@angular/core';

// component definition
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// class definition
export class AppComponent implements OnInit {
  // OnInit method
  ngOnInit(): void { }
  // title 
  title = 'Fruit Basket App';
}
