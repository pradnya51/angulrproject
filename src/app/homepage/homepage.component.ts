import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  
})
export class HomepageComponent implements OnInit {
  imgpath:string="../../assets/icon2.png";
  img1:string="../../assets/black3.jfif";
  img2:string="../../assets/black2.jpg";
  img3:string="../../assets/blackforest.jfif";
  img4:string="../../assets/fruit1.jfif";
  img5:string="../../assets/fruit2.jfif";
  img6:string="../../assets/fruit3.jfif";
 
  constructor() { }
  

  ngOnInit(): void {
    
  }
  
}
