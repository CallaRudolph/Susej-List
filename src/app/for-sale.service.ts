import { Injectable } from '@angular/core';
import { ForSale } from './for-sale.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ForSaleService {
  forSale: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.forSale = database.list('for-sale');
  }

  getForSale() {
    return this.forSale;
  }

  addForSale(newForSale: ForSale) {
    this.forSale.push(newForSale);
  }

  

}
