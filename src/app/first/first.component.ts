import { Component, OnInit, InjectionToken, Inject, Optional, Self} from '@angular/core';
import { Category } from '../../products/models/category.enum';
import { GeneratorService } from '../core/services/generator.service';
import { generateString } from '../core/services/generatorFactory';
import { LocalStorageService } from '../core/services/local-storage.service';
import {ConfigOptionsService} from '../core/services/config-options.service';
import { Config } from '../models/config.model';


const generatedString = new InjectionToken<string>('token');
const localStorageService = new LocalStorageService();
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [GeneratorService,
    { provide: generatedString, useFactory: generateString(50), deps: [GeneratorService] },
    { provide: ConfigOptionsService, useClass: ConfigOptionsService},
    { provide: LocalStorageService, useValue: localStorageService}
  ]
})
export class FirstComponent implements OnInit {

  name: string | null = null;
  description: string | null = null;
  price: number | null = 0;
  category: Category | null = null;
  isAvailable = false;
  categories: Array<Category> = [Category.Laptops, Category.MobilePhones, Category.Watches];

  constructor(@Inject(generatedString) private generatedDescription: string,
              private generatorService: GeneratorService,
              @Optional() private localStorage: LocalStorageService,
              @Self() private  configService: ConfigOptionsService ) {

    this.localStorage.saveData('name', 'Iphone12');
    this.localStorage.saveData('description', generatedDescription);
    this.localStorage.saveData('category', Category.MobilePhones);
    this.localStorage.saveData('isAvailable', 'true');
    this.localStorage.saveData('price', '1200');

    const newConfig = new Config();
    newConfig.login = 'test_login';
    newConfig.id = 2;
    this.configService.setConfig(newConfig);
  }

  ngOnInit(): void {
    console.log(this.generatorService.getNewId());
    console.log(this.generatorService.getNewId());
    this.name = this.localStorage.getData('name');
    this.description = this.localStorage.getData('description');
    this.category = (this.localStorage.getData('category') as Category);
    this.isAvailable = this.localStorage.getData('isAvailable') === 'true';
    this.price = Number(this.localStorage.getData('price'));

    console.log(this.configService.getConfig());
  }
}
