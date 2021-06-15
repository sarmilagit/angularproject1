import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getproduct();
    this.getbilling();
    this.gettodaycall();
    this.getvendor();
    this.getcustomer();
  }
customer:any[]=[];
call:any[]=[];
vendor:any[]=[];
billing:any[]=[];
product:any[]=[];

getproduct(){
  var url = "https://www.firstenquiry.com/web/allproduct.php";
  var input = { "id":localStorage.getItem("id") };
  this.obj.post(url , input) .subscribe(
    response=>{
      this.product= response as string[];
    });
}
getcustomer(){
  var url = "https://www.firstenquiry.com/web/allcustomer.php";
  var input = { "id":localStorage.getItem("id") };
  this.obj.post(url , input) .subscribe(
    response=>{
      this.customer= response as string[];
    });
}
getvendor(){
  var url = "https://www.firstenquiry.com/web/allvendor.php";
  var input = { "id":localStorage.getItem("id") };
  this.obj.post(url , input) .subscribe(
    response=>{
      this.vendor= response as string[];
    });
}
  getbilling(){
  var url = "https://www.firstenquiry.com/web/allbilling.php";
  var input = { "id":localStorage.getItem("id") };
  this.obj.post(url , input) .subscribe(
    response=>{
      this.billing= response as string[];
    });
}
gettodaycall(){
  var url = "https://www.firstenquiry.com/web/alltodaycall.php";
  var input = { "id":localStorage.getItem("id") };
  this.obj.post(url , input) .subscribe(
    response=>{
      this.call= response as string[];
    });
}



}
