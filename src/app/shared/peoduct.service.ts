import { Product } from 'src/app/shared/interfaces';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { FbCreateResponse} from './interfaces';
import { map } from 'rxjs/internal/operators';

@Injectable ({providedIn: 'root'}) 

export class ProductService {

    type

    constructor(private http: HttpClient) {}

    create(product: Product): Observable<Product> {
        return this.http.post<Product>(`${environment.fbDbUrl}/products.json`, product)
        .pipe(map((response: FbCreateResponse) => {
            return {
              ...product,
              id: response.name,
              date: new Date(product.date)  
            }
        }))
    }

    getAll(): Observable<Product[]> {
        return this.http.get(`${environment.fbDbUrl}/products.json`)
        .pipe(map((response: {[key: string]: any}) => {
            return Object
            .keys(response)
            .map(key => ({
                ...response[key],
                id: key,
                date: new Date(response[key].date),
            }))
        }))
    }

    getById(id: string): Observable<Product> {
       return this.http.get<Product>(`${environment.fbDbUrl}/products/${id}.json`)
        .pipe(map((product: Product) => {
            return {
              ...product,
              id,
              date: new Date(product.date)  
            }
        }))
    }

    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.fbDbUrl}/products/${id}.json`)
    }

    update(product: Product): Observable<Product> {
        return this.http.patch<Product>(`${environment.fbDbUrl}/products/${product.id}.json`, product)
    }
    setType(type) {
        this.type = type
    }
}



