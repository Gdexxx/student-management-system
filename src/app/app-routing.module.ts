import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentComponent } from './components/department/department.component';
import { FacultyComponent } from './components/faculty/faculty.component';


const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'department',component:DepartmentComponent
  },
  {
    path:'faculty',component:FacultyComponent
  },
  {
    path:'course',component:CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
