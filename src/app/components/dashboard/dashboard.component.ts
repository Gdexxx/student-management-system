import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  facultyList: any;
  DeptList: any;
  CourseList:any;

  constructor(private service:AppserviceService) { }

  ngOnInit() {
    this.getFaculty()
    this.getDept()
    this.getCourses()
  }

  getFaculty(){ 
    this.service.getfaculty().subscribe((res:any)=>{
      console.log(res);

      this.facultyList=res.length
      console.log(this.facultyList);
      
      
    })
  }
  getDept(){
    this.service.getDepartment().subscribe((res:any)=>{
      console.log(res)
      this.DeptList=res.length
      console.log(this.DeptList);

    })
  }
   getCourses(){
     this.service.getCourse().subscribe((res:any)=>{
       console.log(res);
       this.CourseList=res.length
      console.log(this.CourseList);
       
       
     })
   }

}

