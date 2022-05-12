import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user:any;
  id:any;

  constructor(private http:HttpClient,private toastrService:ToastrService,private route:ActivatedRoute) { 
    this.id=this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    const url="http://localhost:9000/user/"+this.id;
    this.http.get(url).subscribe((res)=>{
      this.user=res;
    })
  }
  updateUser(){
    console.log(this.user);
    const url="http://localhost:9000/user/"+this.id;
    this.http.put(url,this.user).subscribe((res)=>{
      console.log(res);
      this.toastrService.success("user details was successfully updated ");
    },(err)=>{
      this.toastrService.error("updated failed")
    }
    )
  }

}
