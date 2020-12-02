import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/peoduct.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  
  products$: Observable<Product[]>

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getAll()
  }


}
