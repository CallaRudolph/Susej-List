import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ForSale } from '../for-sale.model';
import { Router } from '@angular/router';
import { ForSaleService } from '../for-sale.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-for-sale-detail',
  templateUrl: './for-sale-detail.component.html',
  styleUrls: ['./for-sale-detail.component.css'],
  providers: [ForSaleService]
})
export class ForSaleDetailComponent implements OnInit {
  forSaleId: string;
  forSaleToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private forSaleService: ForSaleService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.forSaleId = (urlParameters['id']);
    });
    this.forSaleToDisplay = this.forSaleService.getForSaleById(this.forSaleId);
  }

}
