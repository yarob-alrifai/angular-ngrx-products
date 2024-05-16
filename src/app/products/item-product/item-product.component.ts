import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../store/product/product';
import { ItemProductDialogComponent } from '../../shared/components/dialog/item-product-dialog/item-product-dialog.component';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css'],
})
export class ItemProductComponent {
  @Input() item!: Product;


  constructor(private dialog: MatDialog) {}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
  openDialog(value:Product): void {
    const dialogRef = this.dialog.open(ItemProductDialogComponent, {
      // Pass the function as data to the dialog
      data: {
        item: value,

      }
    });


  }







}
