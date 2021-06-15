import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,  Routes} from '@angular/router';
import{HttpClientModule} from'@angular/common/http';
import{FormsModule} from'@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { TodaycallComponent } from './todaycall/todaycall.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { VendorComponent } from './vendor/vendor.component';
import { bindCallback } from 'rxjs';


const allpage:Routes = [
                          {path:"dashboard", component:DashboardComponent},
                          {path:"product",component:ProductComponent},
                          {path:"customer",component:CustomerComponent},
                          {path:"vendor",component:VendorComponent},
                          {path:"followup",component:TodaycallComponent},
                          {path:"billing",component:InvoiceComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ProductComponent,
    CustomerComponent,
    TodaycallComponent,
    InvoiceComponent,
    VendorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allpage),
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
