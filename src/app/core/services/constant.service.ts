import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  getApplicationName(): string{
    return 'Test Shop application';
  }
}
