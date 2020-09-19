import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

userlist:any=[]

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.getData().subscribe((userData)=>
    {
this.userlist=userData
console.log(this.userlist)

    })


  }

}
