import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import{MyserviceService}from'./../myservice.service';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private obj:HttpClient ,private myobj:MyserviceService ) { }

  ngOnInit() {
    this.mycustmore();
  }
  allcustmoer:any[]=[];
  mycustmore()
  {
    this.myobj.getcustmore().subscribe(response=>{
      this.allcustmoer=response as string[];
    })
  }
  pname:string;
  qty:number=0;
  price:number=0;

  getinfo(index:number)
  {
    this.pname=this.allcustmoer[index].product;
  }
}
