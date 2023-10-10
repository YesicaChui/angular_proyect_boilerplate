import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornsComponent } from './forns.component';



@NgModule({
  declarations: [
    FornsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FornsComponent
  ]
})
export class FornsModule { }
