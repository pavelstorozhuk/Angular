import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective} from './directives/highligh-directive/highlight.directive';



@NgModule({
  declarations: [HighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective
  ]
})
export class SharedModule { }
