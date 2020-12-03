
import { ProductService } from './../../peoduct.service';
import { Router, RouterLinkActive } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  type = ''

  constructor(public router: Router, private productService: ProductService) {}

  ngOnInit() {
  
  }

  setType(type) {
    this.type = type
    // if(this.type !=='Cart') {
    //   this.router.navigate([''], {
      
    //   })
    //   this.productService.setType(this.type)
    // }
    // if (this.type == 'Phone') {
    //    this.router.navigate(['phones'], )
    //   this.productService.setType('Phone')
    // }
    this.productService.setType(this.type)
  }
}
