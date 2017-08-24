import { Component, OnInit } from '@angular/core';
import { Personal } from '../personal.model';
import { Router } from '@angular/router';
import { PersonalService } from '../personal.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [PersonalService]
})
export class PersonalComponent implements OnInit {

  personals: FirebaseListObservable<any[]>;
  filterByAge: string = "allPersonals";

  constructor(private router: Router, private personalService: PersonalService) {}

  ngOnInit() {
    this.personals = this.personalService.getPersonals();
  }

  goToDetailPage(clickedPersonal) {
    this.router.navigate(['personals', clickedPersonal.$key]);
  }

  submitForm(title: string, location: string, age: number, body: string) {
    var newPersonal: Personal = new Personal(title, location, age, body);
    this.personalService.addPersonal(newPersonal);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
