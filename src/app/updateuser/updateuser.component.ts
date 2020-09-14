import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
//import { register } from './register';
import { FormsModule } from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  form: FormGroup
  register:any=[]
  id:number
  
  update() {
    this.dataService.updateData(this.id,this.form.value).subscribe((res) => {
      alert("data saved successfully");
      //this.route.navigate(['/contact'])
    })

  }
  constructor(private dataService: DataService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>{

      this.id=param["id"]
      this.dataService.getDataById(this.id).subscribe((data)=>
      {    this.register=data
        this.form = new FormGroup(
          {
            username: new FormControl("this.register.username"),
            userpass: new FormControl("this.register.userpass"),
            address: new FormControl("this.register.address"),
            email: new FormControl("this.register.email"),
            mobile: new FormControl("this.register.mobile"),
          }
        )  }
      )
    })
  }

}
