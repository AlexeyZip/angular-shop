import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/peoduct.service';

@Component({
  selector: 'app-home-appliances',
  templateUrl: './home-appliances.component.html',
  styleUrls: ['./home-appliances.component.scss']
})
export class HomeAppliancesComponent implements OnInit {

  products$: Observable<Product[]>

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getAll()
  }
}
