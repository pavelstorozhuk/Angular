import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective} from './directives/highligh-directive/highlight.directive';
import {BoldFontDirective} from './directives/bold-font-directive/bold-font-directive';



@NgModule({
  declarations: [HighlightDirective,  BoldFontDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    BoldFontDirective
  ]
})
export class SharedModule { }
