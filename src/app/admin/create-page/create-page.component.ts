import { AlertService } from './../shared/services/alert.services';
import { ProductService } from './../../shared/peoduct.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  constructor(private productService: ProductService, private alert: AlertService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if(this.form.invalid) {
      return
    }
    const product: Product = {
      type: this.form.value.type,
      name: this.form.value.name,
      description: this.form.value.description,
      photo: this.form.value.photo,
      price: this.form.value.price,
      date: new Date(),
    }

    this.productService.create(product).subscribe(() => {
      this.form.reset()
      this.alert.success('Продукт был добавлен')
    })

    console.log(product);
    
  }


}
