import { ProductService } from './../shared/peoduct.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartPageComponent implements OnInit {
  
  cartProducts = [];
  totalPrice = 0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartProducts = this.productService.cartProducts
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price
    }
    
    
  }

}
