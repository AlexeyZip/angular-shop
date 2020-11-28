import { ProductService } from './../../shared/peoduct.service';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  pSub: Subscription;
  searchStr = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
   this.pSub = this.productService.getAll().subscribe(products => {
      this.products = products
    })
  }

  remove(id: string) {

  }

  ngOnDestroy(): void {
    if(this.pSub) {
      this.pSub.unsubscribe()
    }
  }
}
