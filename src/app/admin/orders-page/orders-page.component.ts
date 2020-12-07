import { OrderService } from './../../shared/order.service';
import { Order } from './../../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../shared/services/alert.services';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  orders: Order[] = [];
  pSub: Subscription;
  dSub: Subscription;

  constructor(private orderService: OrderService, private alert: AlertService) {}

  ngOnInit(): void {
   this.pSub = this.orderService.getAll().subscribe(orders => {
      this.orders = orders
    })
  }

  remove(id: string) {
    this.dSub = this.orderService.remove(id).subscribe(() => {
      this.orders = this.orders.filter(order => order.id !== id)
      this.alert.danger('Заказ был удален')
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
