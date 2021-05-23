
import { Directive, HostListener, HostBinding, ElementRef, Input, Renderer2 } from '@angular/core';



@Directive({
    selector: '[appBoldFont]'
})
export class BoldFontDirective {

    @Input()
    size!: string;

    constructor(private elementRef: ElementRef,
                private renderer: Renderer2){
    }

    /* tslint:disable:no-bitwise */
    @HostListener('click') onClick(): void {
        const randomColor = '#' + ((1 << 24) * Math.random() | 0).toString(16);
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', randomColor);
        this.elementRef.nativeElement.style.fontSize = this.size;
    }
}
