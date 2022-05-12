import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {

  constructor(private http:HttpClient ,private toastrService:ToastrService){}

  ngOnInit(): void {
    this.getAllBooks();
    this.deleteBooks;

    
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
deleteBooks(id:any){
  let cfm = confirm("Do you want to delete ?");
    if(cfm){ 
  const url="http://localhost:9000/Book/" + id;
  this.http.delete(url).subscribe((res)=>{
    console.log(res);
    this.toastrService.success('successfully deleted');
// alert("Successfully Deleted");
    //refresh
   
  },err=>{
    this.toastrService.error('invalid credentails');
  }
  )
}
}
}







