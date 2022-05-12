import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,Subject } from 'rxjs';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddRemoveService {
  
  constructor(private http :HttpClient) { }
 public count=new BehaviorSubject<any>([]);
 public cartItem:any = [];

 getNumber():Observable<any>{
  return this.count.asObservable();
}



 addToCart(item:any){
  this.cartItem.push(item);
  localStorage.setItem("cartitem",JSON.stringify(this.cartItem));
  // this.count.next(this.cartItem.length);
  this.total(item)
}

// getcartItem() {
//   JSON.stringify(localStorage.setItem("cartItem",this.cartItem));
// }
 removeFromBag(item:any){
   this.cartItem.map((d:any,i:any)=>{
        if(item.id == d.id){
            this.cartItem.splice(i,1)
        }
   })
  
 }

 totalPrice=0;
 discount:any=200;
 total(item:any){
  
   this.totalPrice+=item.price;
  localStorage.setItem("totalPrice",JSON.stringify(this.totalPrice));
   
 }

 
}
