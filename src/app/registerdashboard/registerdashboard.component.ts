import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-registerdashboard',
  templateUrl: './registerdashboard.component.html',
  styleUrls: ['./registerdashboard.component.css']
})
export class RegisterdashboardComponent implements OnInit {
register:any=[]
  constructor(private dataservice:DataService) { }

  getRegisterData(){
    this.dataservice.getData().subscribe((res)=>{
      this.register=res
    })
  }

  ngOnInit(): void {
    this.getRegisterData()
  }


}
