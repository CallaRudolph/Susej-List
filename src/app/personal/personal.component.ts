import { Component, OnInit } from '@angular/core';
import { Personal } from '../personal.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  masterPersonalList: Personal [] = [
    new Personal('Look, listen, love', 'East Esplanade', 48, 'Send me yr a/s/l?'),
    new Personal('Uber', 'Hawthorne', 19, 'YOU WERE BUMPING DRAKE. CALL ME ON MY CELLI, BB')
  ];

  constructor() { }

  ngOnInit() {
  }

}
