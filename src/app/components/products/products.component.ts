import { Component, OnInit } from '@angular/core';
import { AddRemoveService } from 'src/app/services/add-remove.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private addRemoveService: AddRemoveService) { }

  ngOnInit(): void {
  }

  // imageSlider=[
  //   {image:"assets/images/imgSlider1.jpg"},
  //   {image:"assets/images/imageSlider2.jpg"},
  //   {image:"assets/images/imgSlider3.jpg"},
  // ]

  products = [
    { id: "1", image: "assets/images/killer.webp", productName: "Killer", quantity: 1, price: 699, isInCart: false },
    { id: "2", image: "assets/images/redtape.webp", productName: "Redtape", quantity: 1, price: 1499, isInCart: false },
    { id: "3", image: "assets/images/roadster.webp", productName: "Roadster", quantity: 1, price: 899, isInCart: false },
    { id: "4", image: "assets/images/highlander.webp", productName: "Highlander", quantity: 1, price: 865, isInCart: false },
    { id: "5", image: "assets/images/mactree.webp", productName: "Mactree", quantity: 1, price: 898, isInCart: false },
    { id: "6", image: "assets/images/provogue.jpg", productName: "Provogue", quantity: 1, price: 899, isInCart: false }
  ];

  addItem(item: any) {
    item.isInCart = true;
    this.addRemoveService.addToCart(item)
    console.log(item);
    // localStorage.setItem("productName", item.productName)
  }
  removeFromBag(item: any) {
    item.isInCart = false;
    this.addRemoveService.removeFromBag(item)
    // localStorage.clear();
  }

}
