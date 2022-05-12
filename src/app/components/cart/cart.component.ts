import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AddRemoveService } from 'src/app/services/add-remove.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public addRemoveService:AddRemoveService) { }

  ngOnInit(): void {
    this.cartProduct = JSON.parse(localStorage.getItem("cartitem")||"");
    this.newTotal=JSON.parse(localStorage.getItem("totalPrice")||"")
  }

  cartProduct=this.addRemoveService.cartItem;
  
  // count:any=this.addRemoveService.cartItem;

  // totalPrice:any=1;
  discountOffer=this.addRemoveService.discount;
  newTotal=this.addRemoveService.totalPrice;

  itemQuantity(event:any, item:any){
    // item.totalPrice=item.price;
    item.totalPrice = item.price*event.target.value;
    // this.newTotal+=item.totalPrice;
  }

  
}
