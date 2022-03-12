import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from 'src/app/appservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseform: any=FormGroup
  dept:any=[]
  courseList:any=[]
  CourseDetails:any;

  
  constructor(private code:FormBuilder, private service:AppserviceService, private toastr:ToastrService) { }

  ngOnInit(): void {
   this.courseform=this.code.group({
    dept:['Select Department',[Validators.required]],
    courseCode:['',[Validators.required]],
    courseTitle:['',[Validators.required]],
    creditUnit:['Select CreditUnit',[Validators.required]],
    semester:['Select Semester',[Validators.required]],

   })
   this.getDepartment()
   this.getCourse()
   
  }
  coursesubmit(){
    this.service.addCourse(this.courseform.value).subscribe((res:any)=>{
      console.log(res)
     this.getCourse() 
    if (res.success==true){
      this.toastr.success("",res.message)
    }
    else{
      this.toastr.error("",res.message)
    }
    })
  }
  getDepartment(){
    this.service.getDepartment().subscribe((res:any)=>{
      console.log(res)
      this.dept=res
      
    })
  }
  getCourse(){
    this.service.getCourse().subscribe((res:any)=>{
      console.log(res)
     
    this.courseList=res
    })
  }
  deleteCou(list:any){
    console.log(list);
    
    this.service.deleteCourse(list.id).subscribe((res:any)=>{
      console.log(res)
      if (res.success==true){
        this.toastr.success("",res.message)
      }
    })
  }
  
  coursedet(list:any){
    this.service.getCourseById(list.id).subscribe((res:any)=>{
      console.log(res)
      this.CourseDetails=res
    })
  }
}
