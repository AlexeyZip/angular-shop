import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/order.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  constructor(private router: Router, public auth: AuthService, private orderService: OrderService) {}
  orders: Order[] = [];
  pSub: Subscription;
  dSub: Subscription;
  ngOnInit() {
    this.pSub = this.orderService.getAll().subscribe(orders => {
      this.orders = orders
    })
  }
  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }
}
