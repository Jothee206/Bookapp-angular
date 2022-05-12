import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
 
  /*category!:string;
  title!:string;
  authorname!:string;
  publishedYear!:number;
  description!:string;
  price!:number;
  ratings!:number;*/
 

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.toastrService.success('completed..');
   
    let items= localStorage.getItem("CART_ITEMS")
    this.books = items != null ? JSON.parse(items):[];
  }
  books!:any;
  placeOrder()
  {
    for(let book of this.books) {
        const url="http://localhost:9000/Books/save";
        let data =  {"category":this.category,"title":this.title,"authorname":this.authorname,"publishedYear":this.publishedYear,""
    }
        this.http.post(url,data).subscribe((res)=>{
          //alert("Order placed");
        },err=>{
        }
        )
  }
  localStorage.removeItem("CART_ITEMS");
  this.products = [];
  }
}


















