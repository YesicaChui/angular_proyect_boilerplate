import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'users',
        loadChildren:()=>import('./pages/users/users.module').then(result=>result.UsersModule)

        // component:UsersComponent
      },
      {
        path:'cursos',
        loadChildren:()=>import('./pages/courses/courses.module').then(result=>result.CoursesModule)
        // component:CoursesComponent
      },
      {
        path:'profesores',
        loadChildren:()=>import('./pages/profesores/profesores.module').then(result=>result.ProfesoresModule)
        // component:ProfesoresComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }