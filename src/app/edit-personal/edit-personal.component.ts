import { Component, Input, OnInit } from '@angular/core';
import { Personal } from '../personal.model';
import { PersonalService } from '../personal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-personal',
  templateUrl: './edit-personal.component.html',
  styleUrls: ['./edit-personal.component.css'],
  providers: [PersonalService]
})
export class EditPersonalComponent implements OnInit {
  @Input() selectedPersonal;

  constructor(private router: Router, private personalService: PersonalService) { }

  ngOnInit() {
  }

  beginUpdatingPersonal(personalToUpdate) {
    this.personalService.updatePersonal(personalToUpdate);
  }

  beginDeletingPersonal(personalToDelete) {
    if(confirm("sure??")){
      this.personalService.deletePersonal(personalToDelete);
      this.router.navigate(['personal']);
    }
  }
}
