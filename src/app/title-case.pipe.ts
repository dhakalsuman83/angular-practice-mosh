import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any{
    let prepositions = ["of","the"]
    if (!value) return null;
    let words = value.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++){
      if (i>0 && prepositions.includes(words[i])) {
        words[i] = words[i].toLowerCase();
      }
      else {
        words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1).toLowerCase();
      }
    }
       return words.join(" ")
  }

}
