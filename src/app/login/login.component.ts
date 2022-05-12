import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.login();
  }
login(){
  const userObj={
    "email":this.email,
    "password":this.password
};
let message!:string
const url="http://localhost:9000/user/login";
    this.http.post(url,userObj,{responseType:'json'}).subscribe((res:any)=>{
      console.log(res);
     

      if(res.message == null){
        this.toastr.error('Login failed!');

      }else{
        this.toastr.success('Login success!..');

      }
    },(err)=>{
      console.log(err);
      this.toastr.error('Login failed!');
    })
}
}