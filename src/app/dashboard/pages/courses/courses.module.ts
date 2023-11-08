import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import {SharedModule} from '../../../shared/shared.module'
import { RouterModule } from '@angular/router';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent,
    CoursesTableComponent,
    CoursesDialogComponent,
  ],
  imports: [
    CommonModule,SharedModule,CoursesRoutingModule
  ]
})
export class CoursesModule { }
