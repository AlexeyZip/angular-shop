import { AlertService } from './../shared/services/alert.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/interfaces';
import { ProductService } from './../../shared/peoduct.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  product: Product
  submitted = false

  uSub: Subscription

  constructor(private route: ActivatedRoute, private productService: ProductService, private alert: AlertService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
     return this.productService.getById(params['id'])
    })).subscribe((product: Product) => {
      this.product = product
      this.form = new FormGroup({
        name: new FormControl(product.name, Validators.required),
        description: new FormControl(product.description, Validators.required),
        photo: new FormControl(product.photo, Validators.required),
        price: new FormControl(product.price, Validators.required),
        type: new FormControl(product.type, Validators.required)
      })
    })
  }

  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe()
    }
  }

  submit() {
    if(this.form.invalid) {
      return
    }

    this.submitted = true

   this.uSub = this.productService.update({
      ...this.product,
      name: this.form.value.name,
      description: this.form.value.description,
      photo: this.form.value.photo,
      price: this.form.value.price,
      type: this.form.value.type,
    }).subscribe(() => {
      this.submitted = false
    })
    this.alert.success('Продукт был изменен')
  }

}
