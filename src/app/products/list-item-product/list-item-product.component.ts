import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../store/product/product';

@Component({
  selector: 'app-list-item-product',
  templateUrl: './list-item-product.component.html',
  styleUrl: './list-item-product.component.css'
})
export class ListItemProductComponent {
  @Input()
  products!: Product[];



ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.

}
}
