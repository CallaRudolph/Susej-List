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

  getForSaleById(forSaleId: string) {
    return this.database.object('/for-sale/' + forSaleId);
  }

  updateForSale(localUpdatedForSale) {
    var forSaleEntryInFirebase = this.getForSaleById(localUpdatedForSale.$key);
    forSaleEntryInFirebase.update({title: localUpdatedForSale.title,
                                    location: localUpdatedForSale.location,
                                    price: localUpdatedForSale.price,
                                    body: localUpdatedForSale.body,
                                    image: localUpdatedForSale.image});
  }

  deleteForSale(localForSaleToDelete) {
    var forSaleEntryInFirebase = this.getForSaleById(localForSaleToDelete.$key);
    forSaleEntryInFirebase.remove();
  }

}
