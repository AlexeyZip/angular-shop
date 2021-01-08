
import { Component } from '@angular/core';
import { ProductService } from '../../peoduct.service';

@Component({
  selector: 'shopping-cart',
  template: `
  <span *ngIf="cartProducts.length >0 ">{{cartProducts.length}}</span>
  `,
  styles: []
})
export class ShoppingCartComponent  {
    cartProducts = [];
    constructor(private productService: ProductService) { }
    ngOnInit(): void {
      this.cartProducts = this.productService.cartProducts
    }
    
}