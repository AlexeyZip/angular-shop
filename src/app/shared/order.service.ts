import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FbCreateResponse, Order } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // type = ''
  //   cartProducts: Product[] = []

    constructor(private http: HttpClient, public router: Router) {}

    create(order: Order): Observable<Order> {
        return this.http.post<Order>(`${environment.fbDbUrl}/orders.json`, order)
        .pipe(map((response: FbCreateResponse) => {
            return {
              ...order,
              id: response.name,
              date: new Date(order.date)  
            }
        }))
    }

    // getAll(): Observable<Product[]> {
    //     return this.http.get(`${environment.fbDbUrl}/products.json`)
    //     .pipe(map((response: {[key: string]: any}) => {
    //         return Object
    //         .keys(response)
    //         .map(key => ({
    //             ...response[key],
    //             id: key,
    //             date: new Date(response[key].date),
    //         }))
    //     }))
    // }


    // remove(id: string): Observable<void> {
    //     return this.http.delete<void>(`${environment.fbDbUrl}/products/${id}.json`)
    // }


}
