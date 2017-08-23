import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Personal } from '../personal.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {
  personalId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
  this.personalId = parseInt(urlParameters['id']);
});
  }

}
