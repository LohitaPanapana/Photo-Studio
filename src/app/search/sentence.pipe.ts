import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentence'
})
export class SentencePipe implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return 'No Description'
    }
    return value[0].toUpperCase() + value.substring(1);
  }

}
