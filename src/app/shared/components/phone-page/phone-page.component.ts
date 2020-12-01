import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-phone-page',
  templateUrl: './phone-page.component.html',
  styleUrls: ['./phone-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhonePageComponent implements OnInit {

@Input() product: Product

  constructor() { }

  ngOnInit(): void {
  }

}
