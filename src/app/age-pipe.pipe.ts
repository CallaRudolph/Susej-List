import { Pipe, PipeTransform } from '@angular/core';
import { Personal } from './personal.model';

@Pipe({
  name: 'agePipe',
  pure: false
})
export class AgePipePipe implements PipeTransform {

  transform(input: Personal[], desiredAge) {
    var output: Personal[] = [];
    if(desiredAge === "youngPersonals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 28) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "oldPersonals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 28) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
