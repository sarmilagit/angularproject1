import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getproduct();  //to load all product on page load
  }
  allproduct:any[]=[];

  getproduct(){
    var url = "https://www.firstenquiry.com/web/allproduct.php";
    var input = { "id":localStorage.getItem("id") };
    this.obj.post(url , input) .subscribe(
      response=>{
        this.allproduct= response as string[];
      });
  }
  name:string;
  price:number;
  details:string;
  msg:string;
  serverRes;
  save()
  {
    var url = "https://www.firstenquiry.com/web/saveproduct.php";
    var input = { "id":localStorage.getItem("id"),
                  "name":this.name,
                  "price":this.price,
                  "details":this.details
                  };
    this.obj.post(url , input) .subscribe(
      response=>{
        this.serverRes= response as string[];
        this.msg =this.serverRes.status;
        this.name="";
        this.price=0;
        this.details="";
        this.getproduct();        //to reload the list
      });
  }

  delitem(id:number)
  {
    this.msg= "please wait Processing..";
    var url = "https://www.firstenquiry.com/web/deleteproduct.php";
    var input = { "id":localStorage.getItem("id"),
                  "proid":id
                };
    this.obj.post(url , input) .subscribe(
      response=>{
        this.serverRes= response as string[];
        this.msg =this.serverRes.status;
        this.getproduct();        //to reload the list
      });
  }
  
p:number=1;
keyword:string;
}
