import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {FormsModule} from '@angular/forms';
import { ProductregComponent } from './productreg/productreg.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { RegisterdashboardComponent } from './registerdashboard/registerdashboard.component';
import { BodyComponent } from './body/body.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AdduserComponent } from './adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    ProductregComponent,
    AddtocartComponent,
    AdmindashboardComponent,
    RegisterdashboardComponent,
    BodyComponent,
    UpdateuserComponent,
    AdduserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
