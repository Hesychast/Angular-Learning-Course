import { Pipe, PipeTransform } from '@angular/core';
import { ReverseWordsService } from '../Services/reverse-words.service';

@Pipe({
  name: 'reverseWords'
})
export class ReverseWordsPipe implements PipeTransform {
  constructor(private reverseWordsService: ReverseWordsService) {}

  transform(value: string): string {
    if (!value) {
      return '';
    }
    
    return this.reverseWordsService.reverseWords(value);
  }

}
