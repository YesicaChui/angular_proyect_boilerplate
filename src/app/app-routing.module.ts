import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { AuthComponent } from './auth/auth.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { ProfesoresComponent } from './dashboard/pages/profesores/profesores.component';
import { dashboardGuard } from './core/guards/dashboard.guard';

const routes: Routes = [
  {
    path:'dashboard',
    canActivate: [dashboardGuard],
    loadChildren:()=>import('./dashboard/dashboard.module').then(result=>result.DashboardModule)
    // component: DashboardComponent,
    // children:[
    //   {
    //     path:'users',
    //     component:UsersComponent
    //   },
    //   {
    //     path:'cursos',
    //     component:CoursesComponent
    //   },
    //   {
    //     path:'profesores',
    //     component:ProfesoresComponent
    //   },

    // ]
  },
  {
    path: 'auth',
    loadChildren:()=>import('./auth/auth.module').then(result=>result.AuthModule)

    // component: AuthComponent
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
