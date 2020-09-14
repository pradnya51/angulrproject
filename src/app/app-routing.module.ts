import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

import {AddtocartComponent } from './addtocart/addtocart.component';
import {AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ProductregComponent } from './productreg/productreg.component';

import { RegisterdashboardComponent } from './registerdashboard/registerdashboard.component';
import { BodyComponent } from './body/body.component';


const routes: Routes = [
  //{path:"",component:BodyComponent},
  {path:"",component:HomepageComponent},
  {path:'admindash',component:AdmindashboardComponent},
  {path:'reg',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactusComponent},
  {path:'addtocart',component:AddtocartComponent},
  {path:'update/:id',component:UpdateuserComponent},
  {path:'registerdash',component:RegisterdashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
