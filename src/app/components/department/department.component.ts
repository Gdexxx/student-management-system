
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from 'src/app/appservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departmentform: any=FormGroup
  faculty: any=[]
  dept: any=[]
  departmentDetail: any;

  constructor( private team:FormBuilder, private service:AppserviceService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.departmentform=this.team.group({
      faculty:['Select Faculty',[Validators.required]],
      name:['',[Validators.required]],
    })
    this.getFaculty()
    this.getDepartment()
  }
  
  submitdept(){
    this.service.addDepartment(this.departmentform.value).subscribe((res:any)=>{
      console.log(res)
      this.getDepartment()
      if (res.success==true){
        this.toastr.success("",res.message)
      }
      else{
        this.toastr.error("",res.message)
      }
    
      

    })
    
    

    }
    getFaculty(){
      this.service.getfaculty().subscribe((res:any)=>{
      // console.log(res)
    this.faculty=res
  })
  
  }
  getDepartment(){
    this.service.getDepartment().subscribe((res:any)=>{
      // console.log(res)
     this.dept=res 
    })
  }
  deleteDept(list:any){
    this.service.deleteDepartment(list.id).subscribe((res:any)=>{
      console.log(res)
      this.getDepartment()
      if (res.success==true){
        this.toastr.success("",res.message)
      }
    })
  }

  detail(i:any){
    // console.log(i);
    this.service.getDepartmentById(i.id).subscribe((res:any)=>{
      // console.log(res);
      this.departmentDetail=res
    })
    
  }
}
