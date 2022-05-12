import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!: string;
  email!: string;
  password!: string;
  mobileNumber!: number

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.register();
  }
  register() {
    const userObj={"name":this.name,"email":this.email,"password":this.password,"mobileNumber":this.mobileNumber};
    
   
    
    const url="http://localhost:9000/user/save";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       //alert("successfully Registered");
       this.toastr.success('success!');
     },(err)=>{
       console.log(err);
       this.toastr.error('register failed');
     })
  }
}

