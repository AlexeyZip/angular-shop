import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/peoduct.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  products$: Observable<Product[]>

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getAll()
    return this.productService.setType('Games')
  }
}
