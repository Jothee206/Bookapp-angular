import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookId!:number;
  category!:string;
  title!:string;
  authorname!:string;
  publishedYear!:number;
  description!:string;
  price!:number;
  ratings!:number;
  imageUrl!:string


  constructor(private http:HttpClient,private toastr:ToastrService) { }
  
  ngOnInit(): void {
    this.addBook();

  }
addBook(){
  const addbookObj={"bookId":this.bookId,"category":this.category,"title":this.title,"authorname":this.authorname,"publishedYear":this.publishedYear,
"description":this.description,"price":this.price,"ratings":this.ratings,"imageUrl":this.imageUrl};

const url="http://localhost:9000/Books/save";
this.http.post(url,addbookObj).subscribe((res)=>{
  console.log(res);
  this.toastr.success("books were added successfully by admin");
},(err)=>{
  console.log(err);
  this.toastr.error("admin didn't added the books");

})
}
}
