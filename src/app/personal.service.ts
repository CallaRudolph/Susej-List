import { Injectable } from '@angular/core';
import { Personal } from './personal.model';
import { PERSONALS } from './mock-personals';

@Injectable()
export class PersonalService {

  constructor() { }

  getPersonals() {
    return PERSONALS;
  }

  getPersonalById(personalId: number) {
    for (var i = 0; i <= PERSONALS.length -1; i++) {
      if (PERSONALS[i].id === personalId) {
        return PERSONALS[i];
      }
    }
  }
}
