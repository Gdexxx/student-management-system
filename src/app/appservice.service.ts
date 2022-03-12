import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  baseURL:string=environment.backend.baseURL+'/faculty/'
  deptURL:string=environment.backend.baseURL+'/department/'
  courseURL:string=environment.backend.baseURL+'/course/'

  constructor(private http: HttpClient ) { }

  addFaculty(data:any):any{
    return this.http.post(this.baseURL+'create',data)
  }
  getfaculty():any{
    return this.http.get(this.baseURL+'getFaculties')
  }
  deleteFaculty(id:any):any{
    return this.http.delete(this.baseURL+'deleteFacultyById/'+id)
  }
  addDepartment(data:any):any{
    return this.http.post(this.deptURL+'create',data)
  }
  addCourse(data:any):any{
    return this.http.post(this.courseURL+'create', data)
  }
  getDepartment():any{
    return this.http.get(this.deptURL+'getDepartments')
  }
  getCourse():any{
    return this.http.get(this.courseURL+'getCourse')
  }
  deleteDepartment(id:any):any{
  return this.http.delete(this.deptURL+'deleteDepartmentById/'+id)    
  }
  deleteCourse(id:any):any{
    return this.http.delete(this.courseURL+'deleteCourseById/'+id)
  }

  getDepartmentById(id:any):any{
    return this.http.get(this.deptURL+"getDepartmentById/"+id)
  }
  getCourseById(id:any):any{
    return this.http.get(this.courseURL+"getCourseById/"+id)
  }
}
