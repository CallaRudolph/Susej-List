import { Component, OnInit } from '@angular/core';
import { ForSale } from '../for-sale.model';
import { Router } from '@angular/router';
import { ForSaleService } from '../for-sale.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css'],
  providers: [ForSaleService]
})
export class ForSaleComponent implements OnInit {

  forSale: FirebaseListObservable<any[]>;
  filterByPrice: string = "allPrices";

  constructor(private router: Router, private forSaleService: ForSaleService) { }

  ngOnInit() {
    this.forSale = this.forSaleService.getForSale();
  }

  goToDetailPage(clickedForSale) {
    this.router.navigate(['for-sale', clickedForSale.$key]);
  }

  submitForm(title: string, location: string, price: number, body: string, image: string) {
    var newForSale: ForSale = new ForSale(title, location, price, body, image);
    this.forSaleService.addForSale(newForSale);
  }

  onChange(optionFromMenu) {
  this.filterByPrice = optionFromMenu;
}

}
