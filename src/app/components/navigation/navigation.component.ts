import { Component, OnInit } from '@angular/core';
import { AddRemoveService } from 'src/app/services/add-remove.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public addRemoveService:AddRemoveService) { }

  ngOnInit(): void {
  }

  count:any=this.addRemoveService.cartItem;
}
