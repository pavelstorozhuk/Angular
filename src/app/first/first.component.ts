import { Component, OnInit } from '@angular/core';
import { Category } from '../products/Models/category.enam';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

   name = 'IPhone12';
   description = 'some description';
   price = 1400;
   category: Category = Category.MobilePhones;
   isAvailable = true;
   categories: Array<Category> = [Category.Laptops, Category.MobilePhones, Category.Watches];

  constructor() { }

  ngOnInit(): void {
  }

}
