import { Pipe, PipeTransform } from '@angular/core';
import { ForSale } from './for-sale.model'

@Pipe({
  name: 'pricePipe',
  pure: false
})
export class PricePipePipe implements PipeTransform {

  transform(input: ForSale[], desiredPrice) {
    var output: ForSale[] = [];
    if(desiredPrice === "inexpensivePrices") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price <= 20) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPrice === "moderatePrices") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price > 20 && input[i].price < 150) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPrice === "expensivePrices") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price >= 150) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
