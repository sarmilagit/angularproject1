import { Component, OnInit } from '@angular/core';


//creating httpclient for routing

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getvendor();
  }

  allvendor:any[]=[];

  getvendor()
  {
    var url="https://www.firstenquiry.com/web/allvendor.php";
    var input = {"id":localStorage.getItem("id")};
    this.obj.post(url, input).subscribe(
      response=>{
        this.allvendor = response as string[];
      });
  }
  name:string;
  email:string;
  mobile:number;
  msg:string;
  serverRes;
  save()
  {
    var url = "https://www.firstenquiry.com/web/savevendor.php";
    var input = { "id":localStorage.getItem("id"),
                  "name":this.name,
                  "mobile":this.mobile,
                  "email":this.email
                  };
    this.obj.post(url , input) .subscribe(
      response=>{
        this.serverRes= response as string[];
        this.msg =this.serverRes.status;
        this.name="";
        this.mobile=0;
        this.email="";
        this.getvendor();        //to reload the list
      });
}
}
