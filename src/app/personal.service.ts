import { Injectable } from '@angular/core';
import { Personal } from './personal.model';
import { PERSONALS } from './mock-personals';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PersonalService {
  personals: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.personals = database.list('personals');
  }

  getPersonals() {
    return this.personals;
  }

  addPersonal(newPersonal: Personal) {
    this.personals.push(newPersonal);
  }

  getPersonalById(personalId: number) {
    // for (var i = 0; i <= PERSONALS.length -1; i++) {
    //   if (PERSONALS[i].id === personalId) {
    //     return PERSONALS[i];
    //   }
    // }
  }
}
