import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Personal } from '../personal.model';
import { Router } from '@angular/router';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css'],
  providers: [PersonalService]
})
export class PersonalDetailComponent implements OnInit {
  personalId: number;
  personalToDisplay: Personal;

  constructor(private route: ActivatedRoute, private location: Location, private personalService: PersonalService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.personalId = parseInt(urlParameters['id']);
    });
    this.personalToDisplay = this.personalService.getPersonalById(this.personalId);
  }

}
