import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{MyserviceService} from './../myservice.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private obj:HttpClient , private myobj:MyserviceService) { }

  ngOnInit() {
    this.getcustomer();
    this.myproduct();
  }
allcustomer:any[]=[];

getcustomer(){
  var url = "https://www.firstenquiry.com/web/allcustomer.php";
  var input = { "id":localStorage.getItem("id") };
  this.obj.post(url , input) .subscribe(
    response=>{
      this.allcustomer= response as string[];
    });
}
allproduct:any[]=[];
myproduct(){
  this.myobj.getproduct().subscribe(response=>{
    this.allproduct = response as String[];
  })
}
cname:string;
cmobile:number;
cproduct:string;
qty:number=0;
price:number=0;

save()
{
  var url = "https://www.firstenquiry.com/web/savecustomer.php";
  var input = { 
                "id":localStorage.getItem("id"),
                "name":this.cname,
                "mobile":this.cmobile,
                "product":this.cproduct,
                "qty":this.qty,
                "price":this.price
              };
  this.obj.post(url,input).subscribe(response=>{
    this.getcustomer();
    this.cname="";
    this.cmobile=0;
    this.cproduct="";
    this.qty=0;
    this.price=0;
  })
  
}
p:number=1;
keyword:string;
}
