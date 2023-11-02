import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent,
    CoursesTableComponent,
    CoursesDialogComponent,
  ],
  imports: [
    CommonModule,SharedModule,RouterModule
  ]
})
export class CoursesModule { }
