import { Injectable } from '@angular/core';
import {genID} from './gen-id.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  private generator = genID();

  generate(length: number): string{

    let generatedString = '';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers =  '0123456789';
    const allSymbols = upperCase + lowerCase + numbers;
    for (let index = 0; index < length; index++) {
      const randomIndex = Math.floor(Math.random() * allSymbols.length);
      generatedString += allSymbols.charAt(randomIndex);
    }

    return generatedString;
  }

  getNewId(): number {
    return this.generator.next().value;
  }
}
