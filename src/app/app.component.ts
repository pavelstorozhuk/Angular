import {
  Component, ViewChild, ElementRef, AfterViewInit,
} from '@angular/core';
import { ConstantService } from './core/services/constant.service';


const constantService = new ConstantService();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: ConstantService, useValue: constantService }]

})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef<HTMLHeadingElement> | undefined;
  title = 'shop';

  constructor(private service: ConstantService) {
  }

  ngAfterViewInit(): void {
    if (this.appTitle) {
      this.appTitle.nativeElement.textContent = this.service.getApplicationName();
    }
  }
}
