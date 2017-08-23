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

  getPersonalById(personalId: string) {
    return this.database.object('/personals/' + personalId);
  }

  updatePersonal(localUpdatedPersonal) {
    var personalEntryInFirebase = this.getPersonalById(localUpdatedPersonal.$key);
    personalEntryInFirebase.update({title: localUpdatedPersonal.title,
                                    location: localUpdatedPersonal.location,
                                    age: localUpdatedPersonal.age,
                                    body: localUpdatedPersonal.body});
  }
}
