import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesoresComponent } from './profesores.component';
import { ProfesoresDialogComponent } from './components/profesores-dialog/profesores-dialog.component';
import { ProfesoresTableComponent } from './components/profesores-table/profesores-table.component';
import { ProfesoresDetailComponent } from './components/profesores-detail/profesores-detail.component';



@NgModule({
  declarations: [
    ProfesoresComponent,
    ProfesoresDialogComponent,
    ProfesoresTableComponent,
    ProfesoresDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfesoresModule { }
