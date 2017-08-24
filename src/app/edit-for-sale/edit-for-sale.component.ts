import { Component, Input, OnInit } from '@angular/core';
import { ForSale } from '../for-sale.model';
import { ForSaleService } from '../for-sale.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-for-sale',
  templateUrl: './edit-for-sale.component.html',
  styleUrls: ['./edit-for-sale.component.css'],
  providers: [ForSaleService]
})
export class EditForSaleComponent implements OnInit {
  @Input() selectedForSale;

  constructor(private router: Router, private forSaleService: ForSaleService) { }

  ngOnInit() {
  }

  beginUpdatingForSale(forSaleToUpdate){
    this.forSaleService.updateForSale(forSaleToUpdate);
  }

}
