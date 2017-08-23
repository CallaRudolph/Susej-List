import { Component, OnInit } from '@angular/core';
import { Personal } from './personal.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Susejlist';

  // masterPersonalList: Personal [] = [
  //   new Personal
  // ];

  constructor(private router: Router) {}
}
