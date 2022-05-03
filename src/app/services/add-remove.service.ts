import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddRemoveService {
  
  constructor() { }
 public count=new BehaviorSubject<any>([]);
 public cartItem:any = [];

 getNumber():Observable<any>{
  return this.count.asObservable();
}



 addToCart(item:any){
  this.cartItem.push(item)
  this.count.next(this.cartItem.length);
}
 removeFromBag(item:any){
   this.cartItem.map((d:any,i:any)=>{
        if(item.id == d.id){
            this.cartItem.splice(i,1)
        }
   })
  
 }
}
