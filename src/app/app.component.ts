import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project3';
  userlogin:boolean=false;
  name:string;
  constructor(){}
  ngOnInit(){
    this.name=localStorage.getItem("fullname");
    if((this.name=="")||(this.name==null))
    {
      this.userlogin=false;
    }else{
      this.userlogin=true;
    }
  }
  
}
