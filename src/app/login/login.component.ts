import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
//import { register } from './register';

import {FormsModule} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form=FormGroup
  username=""
  userpass=""

  constructor(private dataservice:DataService,private router:Router) { }

  adminloginmethod() {
    
    if (this.username == "admin" && this.userpass == "admin") {
      this.router.navigate(['/admindash']) 
   }
   else{
     alert('entered username or userpassword is wrong')
   }
  }


  ngOnInit(): void {
  }

}
