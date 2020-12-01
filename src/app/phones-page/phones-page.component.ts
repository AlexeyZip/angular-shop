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

  products$: Observable<Product[]>

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getAll()
  }

}
