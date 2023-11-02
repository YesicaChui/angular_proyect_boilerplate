import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { CoursesModule } from './pages/courses/courses.module';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    UsersModule,
    SharedModule,
    RouterModule,
    CoursesModule,
  ],
  exports :[
    DashboardComponent
  ]

})
export class DashboardModule { }
