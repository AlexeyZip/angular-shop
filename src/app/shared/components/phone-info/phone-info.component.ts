import { Product } from './../../interfaces';
import { Observable } from 'rxjs';
import { ProductService } from './../../peoduct.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-phone-info',
  templateUrl: './phone-info.component.html',
  styleUrls: ['./phone-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhoneInfoComponent implements OnInit {

// @Input() product: Product
  product$: Observable<Product>
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.product$ = this.route.params
    .pipe(switchMap((params: Params) => {
      return this.productService.getById(params['id'])
    }))
  }

}
