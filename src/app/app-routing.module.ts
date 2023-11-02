import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { AuthComponent } from './auth/auth.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent,
    children:[
      {
        path:'users',
        component:UsersComponent
      },
      {
        path:'cursos',
        component:CoursesComponent
      },

    ]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
