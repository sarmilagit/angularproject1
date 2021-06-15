import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private obj:HttpClient) { }

getproduct(){
  var url = "https://www.firstenquiry.com/web/allproduct.php";
  var input = { "id":localStorage.getItem("id") };
  return this.obj.post(url,input);
}
getcustmore()
{
  var url="https://www.firstenquiry.com/web/allcustomer.php";
  var input = {"id":localStorage.getItem("id")};
  return this.obj.post(url,input);
}
}