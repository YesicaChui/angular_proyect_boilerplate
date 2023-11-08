import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard.component';
import { ProfesoresComponent } from './profesores.component';


const routes: Routes = [
  {
    path:'',
   component:ProfesoresComponent
    // component:UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesoresRoutingModule { }