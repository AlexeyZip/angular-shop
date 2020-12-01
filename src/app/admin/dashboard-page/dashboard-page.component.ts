import { AlertService } from './../shared/services/alert.services';
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
  dSub: Subscription;
  searchStr = '';

  constructor(private productService: ProductService, private alert: AlertService) {}

  ngOnInit(): void {
   this.pSub = this.productService.getAll().subscribe(products => {
      this.products = products
    })
  }

  remove(id: string) {
    this.dSub = this.productService.remove(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id)
      this.alert.danger('Продукт был удален')
    })
  }

  ngOnDestroy(): void {
    if(this.pSub) {
      this.pSub.unsubscribe()
    }

    if(this.dSub) {
      this.dSub.unsubscribe()
    }
  }
}
