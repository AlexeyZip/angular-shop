import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/peoduct.service';

@Component({
  selector: 'app-laptop-page',
  templateUrl: './laptop-page.component.html',
  styleUrls: ['./laptop-page.component.scss']
})
export class LaptopPageComponent implements OnInit {

  products$: Observable<Product[]>

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getAll()
    return this.productService.setType('Laptop')
  }
}
