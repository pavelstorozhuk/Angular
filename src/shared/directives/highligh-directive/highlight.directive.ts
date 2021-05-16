import { Directive, HostListener, HostBinding, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  @HostBinding('style.background')  background = 'white';
  @HostListener('mouseenter') onMouseEnter(): void {
    this.background = 'green';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.background = 'white';
  }
}
