import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    IconsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule

  ],
  exports:[
    IconsComponent
  ]
})
export class IconsModule { }
