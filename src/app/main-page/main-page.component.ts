import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  isButtonVisible = true;

  constructor() { }

  ngOnInit(): void {
  }
  dealone:any;
  dealtwo:any;
  splitted_text:any;
  order: any[]=[];
  total:any;
  price:any;
  billamount: number = 0;
  totalbill:number=0;
  today: number = Date.now();

  addproduct(argudata:string){
    this.splitted_text=argudata.split("🍔");
    this.splitted_text.push(1)
    this.order.push(this.splitted_text);
    let price = this.splitted_text[1];
    let priceInNum =  +price;
    this.billamount += priceInNum;

  }
   

  // Delete item
  delete_item(item){
    console.log("trigered")
    let removePrice = this.order[item][1];
    let finalPrice = +removePrice;
    this.billamount = this.billamount - finalPrice;
    this.order.splice(item,1);
    console.log("Item deleted",this.order)
  }

  // Quantity
  add_quantity(item){
    let val = this.order[item][2] +1;
    this.order[item][2] = val;
    let numberValue = Number(this.order[item][1]);
    this.billamount += numberValue;
    console.log('value at 2',this.order[item][2]) ;
  }
  minus_quantity(item){
    if(this.order[item][2] > 1) {
      let val = this.order[item][2] -1;
      this.order[item][2] = val;
      let numberValue = Number(this.order[item][1]);
      this.billamount -= numberValue;
    }
  }

}
