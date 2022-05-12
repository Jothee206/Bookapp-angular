import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

book:any;
id:any;

  constructor(private http:HttpClient,private toastrService:ToastrService,private route:ActivatedRoute) { 
this.id=this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getBook();

  }
getBook(){
  const url="http://localhost:9000/Books/"+this.id;
  this.http.get(url).subscribe((res)=>{
    this.book=res;
  })
}
updateBooks(){
  console.log(this.book);
  const url="http://localhost:9000/Books/"+this.id;
  this.http.put(url,this.book).subscribe((res)=>{
    console.log(res);
    this.toastrService.success('successfully updated');
  },(err)=>{
    this.toastrService.error("update failure")
  }
  )
}

}
  



