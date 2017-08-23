import { Component, Input, OnInit } from '@angular/core';
import { Personal } from '../personal.model';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-edit-personal',
  templateUrl: './edit-personal.component.html',
  styleUrls: ['./edit-personal.component.css'],
  providers: [PersonalService]
})
export class EditPersonalComponent implements OnInit {
  @Input() selectedPersonal;

  constructor(private personalService: PersonalService) { }

  ngOnInit() {
    console.log(this.selectedPersonal);
  }

  beginUpdatingPersonal(personalToUpdate) {
    this.personalService.updatePersonal(personalToUpdate);
  }
}
