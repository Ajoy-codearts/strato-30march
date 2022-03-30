import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  flag:boolean= false;
  btnFlag:boolean= true;
  menuFlag(){
    this.flag=!this.flag;
    this.btnFlag=!this.btnFlag;    
  }
 
}
