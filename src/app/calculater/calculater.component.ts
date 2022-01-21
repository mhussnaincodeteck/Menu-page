import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculater',
  templateUrl: './calculater.component.html',
  styleUrls: ['./calculater.component.css']
})
export class CalculaterComponent implements OnInit {
  display_val:string="";
  res:any;

  constructor() { }

  ngOnInit(): void {
  }

  // display vaues on screen
  display(values){
    this.display_val+=values;
    console.log("display_val:",this.display_val)
  }

  // clear screen
  clearScreen(){
    this.display_val="";
    }
  // Calculation
  calculate(){
    this.res=eval(this.display_val);
    this.display_val=this.res;
  }
  // backspace
  back(){
    console.log(this.display_val.length);
    this.display_val=this.display_val.slice(0,-1);
    console.log("after slice",this.display_val.length)
  }
}
