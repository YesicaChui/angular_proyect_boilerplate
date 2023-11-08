import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard.component';
import { CoursesComponent } from './courses.component';


const routes: Routes = [
  {
    path:'',
   component:CoursesComponent
    // component:UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }