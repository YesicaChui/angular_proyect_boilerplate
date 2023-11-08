import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard.component';
import { UsersComponent } from './users.component';


const routes: Routes = [
  {
    path:'',
   component:UsersComponent
    // component:UsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }