import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
  }
 

  email:string;
  pass:string;
  errormsg:string;

  serverRes;

  gologin()
  { 

      if((this.email==undefined)||(this.pass==undefined))
      {
        this.errormsg= "Sorry Invalid Input";
      }
      else{
        this.errormsg= "Please wait processing...";
        var url = "https://www.firstenquiry.com/web/auth.php";
        var input = {
                      "email":this.email,
                      "password":this.pass
                    }
        this.obj.post(url , input) .subscribe(
          response=>{
            this.serverRes = response as string[];
            if(this.serverRes.id=="")
            {
              this.errormsg= "Invalid or Not Exist";

            }else{
              this.errormsg= "Welcome , Redirecting...";
              localStorage.setItem("fullname",this.serverRes.name);  //storing email to cookie
              localStorage.setItem("id",this.serverRes.id);  //storing email to cookie
              window.location.href="/dashboard";
            }
          });
        }
  }

}
