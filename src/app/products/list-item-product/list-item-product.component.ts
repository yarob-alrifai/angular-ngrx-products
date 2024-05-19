import { Component, Input } from '@angular/core';
import { Product } from '../../store/product/product';

@Component({
  selector: 'app-list-item-product',
  templateUrl: './list-item-product.component.html',
  styleUrls: ['./list-item-product.component.css']
})
export class ListItemProductComponent {
  // Input property to receive an array of products
  @Input() products!: Product[];

  constructor() { }

}
