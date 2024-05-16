import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReverseWordsService {
  
  constructor() { }

  
  reverseWords(sentence: string): string {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');
  }
}
