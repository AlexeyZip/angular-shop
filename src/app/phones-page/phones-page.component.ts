import { ProductService } from './../shared/peoduct.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/interfaces';

@Component({
  selector: 'app-phones-page',
  templateUrl: './phones-page.component.html',
  styleUrls: ['./phones-page.component.scss']
})
export class PhonesPageComponent implements OnInit {
  // type = 'Phone'
  products$: Observable<Product[]>

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getAll()
    return this.productService.setType('Phone')
  }
  // setType(type) {
  //   this.type = type
   
  //   this.productService.setType(this.type)
  // }

}
