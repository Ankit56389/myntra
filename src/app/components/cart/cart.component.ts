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
  }

  cartProduct=this.addRemoveService.cartItem;
  
  itemQuantity:any=1;

  mychange(event:any){
    this.itemQuantity=event.target.value;
  }

  
}
