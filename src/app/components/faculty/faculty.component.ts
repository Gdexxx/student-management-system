import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormBuilder, NgForm, Validators  } from '@angular/forms';
import { AppserviceService } from 'src/app/appservice.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  
  facultyForm: any = FormGroup
  faculty: any=[]
  
  constructor( private fb: FormBuilder, private service: AppserviceService, private toastr:ToastrService) { }
  

  ngOnInit() {
    this.facultyForm=this.fb.group({
      name:['', [Validators.required]],
     
    })
  this.getFaculty()
  }
  
  addfaculty(){
    this.service.addFaculty(this.facultyForm.value).subscribe((res:any)=>{
      console.log(res)
      this.getFaculty()
  
      if (res.success==true){
        this.toastr.success("",res.message)
      }else{
        this.toastr.error("",res.message)
      }
    },
    (error:any)=>{
      this.toastr.error("",error.error.message)
    }
    )
  }
  getFaculty(){
    this.service.getfaculty().subscribe((res:any)=>{
      // console.log(res)
    this.faculty=res  

    })
  }
  deleteFaculty(list:any){
    console.log(list)
    this.service.deleteFaculty(list.id).subscribe((res:any)=>{
      console.log(res)
      if(res.success==true){
        this.toastr.success("",res.message)
      }
      this.getFaculty()
    },
    (error:any)=>{
      console.log(error);
      
    }
    )
  }
}
