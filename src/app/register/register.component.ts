import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { register } from './register';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  id:number
  
  registermethod() {
    this.dataService.saveData(this.form.value).subscribe((res) => {
      alert("data saved successfully");
      //this.route.navigate(['/contact'])
    })

  }
  constructor(private dataService: DataService,private route:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        username: new FormControl(""),
        userpass: new FormControl(""),
        address: new FormControl(""),
        email: new FormControl(""),
        mobile: new FormControl(""),
      }
    )
  }

}
