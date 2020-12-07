
import { ProductService } from './../../peoduct.service';
import { Router, RouterLinkActive } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  type = 'Phone'

  constructor(public router: Router, private productService: ProductService) {}

  ngOnInit() {
  
  }
  

  setType(type) {
    this.type = type
   
    this.productService.setType(this.type)
  }
}
