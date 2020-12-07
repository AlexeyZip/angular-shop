import { Order } from './../shared/interfaces';
import { OrderService } from './../shared/order.service';
import { ProductService } from './../shared/peoduct.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AlertService } from '../admin/shared/services/alert.services';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartPageComponent implements OnInit {
  form: FormGroup;
  cartProducts = [];
  totalPrice = 0;
  submitted: boolean;
  constructor(private productService: ProductService, private orderService: OrderService,) { }
  // private alert: AlertService
  ngOnInit(): void {
    this.cartProducts = this.productService.cartProducts
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price
    }
    
    this.form = new FormGroup({
      phone: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl('Cash'),
    })
  }
  // submit() {
  //   if (this.form.invalid) {
  //     return;
  //   }
  //   this.submitted = true;
  //   const user: User = {
  //     email: this.form.value.email,
  //     password: this.form.value.password,
  //   };
  // }

  submit() {
    if(this.form.invalid) {
      return
    }

    this.submitted = true

    const order: Order = {
      phone: this.form.value.phone,
      name: this.form.value.name,
      address: this.form.value.address,
      orders: this.cartProducts,
      payment: this.form.value.payment,
      price: this.totalPrice,
      date: new Date(),
    }

    this.orderService.create(order).subscribe(() => {
      this.form.reset()
      this.submitted = false;
      // this.alert.success('Заказ был успешно создан')
    })
   
  }

  delete(product) {
    this.totalPrice -= +product.price
    this.cartProducts.splice(this.cartProducts.indexOf(product), 1)
  }
}
