import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../store/product/product';
import { ItemProductDialogComponent } from '../../shared/components/dialog/item-product-dialog/item-product-dialog.component';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css'],
})
export class ItemProductComponent {
  // Input property to receive a single product item
  @Input() item!: Product;

  constructor(private dialog: MatDialog) {}

  // Method to open the dialog for displaying product details
  openDialog(value: Product): void {
    const dialogRef = this.dialog.open(ItemProductDialogComponent, {
      data: {
        item: value, // Pass the product data to the dialog component
      }
    });
  }
}
