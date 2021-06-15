import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-todaycall',
  templateUrl: './todaycall.component.html',
  styleUrls: ['./todaycall.component.css']
})
export class TodaycallComponent implements OnInit {

  constructor(private obj:HttpClient) {
   
   }

  ngOnInit() {
    this.getcall();
  }
 allcall:any[]=[];
 getcall()
 {
  var url = "https://www.firstenquiry.com/web/todaycall.php";
  var input = { "id":localStorage.getItem("id") };
  this.obj.post(url,input).subscribe(response=>{
    this.allcall=response as string[];
  })
 }
 custid:number;
 edit:boolean=false;
 historymsg:any[]=[];
 editinfo(id:number)
 {
   //alert(id);
    this.custid=id;
   this.edit=true;
   var url = "https://www.firstenquiry.com/web/getdiscussion.php";
   var input = { "id":localStorage.getItem("id"),
                  "customerid":id
                };
   this.obj.post(url,input).subscribe(response=>{
     this.historymsg=response as string[];
   })
 }
 msg:string;
 status:string;
 nextcall:string;
 savemessage()
 {
    //alert(this.msg);
    //alert(this.status);
    //alert(this.custid);
    var url = "https://www.firstenquiry.com/web/savemessage.php";
   var input = { "id":localStorage.getItem("id"),
                  "customerid":this.custid,
                  "msg":this.msg,
                  "status":this.status,
                  "nextcall":this.nextcall
                };
   this.obj.post(url,input).subscribe(response=>{
     this.editinfo(this.custid); //to reload the current disscussion
     this.getcall();//to reload the today list changing apple then edit its gone
     this.msg="";
     this.nextcall="";
     this.status="";
   })
 }
}
