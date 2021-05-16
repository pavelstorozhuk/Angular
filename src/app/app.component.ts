import {
  Component, ViewChild, ElementRef, AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef<HTMLHeadingElement> | undefined;
  title = 'shop';

  constructor() { }

  ngAfterViewInit(): void {
    if (this.appTitle) {
      this.appTitle.nativeElement.textContent = 'Online shop';
    }
  }
}
