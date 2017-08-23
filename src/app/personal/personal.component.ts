import { Component, OnInit } from '@angular/core';
import { Personal } from '../personal.model';
import { Router } from '@angular/router';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [PersonalService]
})
export class PersonalComponent implements OnInit {

  personals: Personal [];

  constructor(private router: Router, private personalService: PersonalService) {}

  ngOnInit() {
    this.personals = this.personalService.getPersonals();
  }

  goToDetailPage(clickedPersonal: Personal) {
     this.router.navigate(['personal', clickedPersonal.id]);
   };
}
