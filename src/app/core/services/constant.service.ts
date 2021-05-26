import { Injectable } from '@angular/core';

// Это не совсем литерал
@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  getApplicationName(): string{
    return 'Test Shop application';
  }
}
