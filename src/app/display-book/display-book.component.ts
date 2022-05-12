import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {

  constructor(private http:HttpClient ,private toastrService:ToastrService){}

  ngOnInit(): void {
    this.getAllBooks();
    

    
  }
  books!:any;

getAllBooks()
{
  const url="http://localhost:9000/Books/list";
  this.http.get(url).subscribe((res)=>{
    this.books= res;
  },err=>{
  }
  )

}

   
  




}


