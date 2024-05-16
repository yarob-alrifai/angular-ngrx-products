
import { Component } from '@angular/core';
import { EMPTY, Observable, Subscription, map } from 'rxjs';
import { Product, ProductState } from '../../store/product/product';
import { Store } from '@ngrx/store';
import {
  clearProducts,
  deleteProductRequest,
  loadProductsRequest,
  updateProductRequest,
} from '../../store/product/product.actions';
import {
  getAllproductSelector,
  getErrorSelector,
  getLoadingSelector,
} from '../../store/product/product.selector';
import { MatDialog } from '@angular/material/dialog';
import { ItemProductDialogComponent } from '../../shared/components/dialog/item-product-dialog/item-product-dialog.component';
import { DeleteDialogComponent } from '../../shared/components/dialog/delete-dialog/delete-dialog.component';
import { UpdateItemProductDialogComponent } from '../../shared/components/dialog/update-item-product-dialog/update-item-product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  // red my subscribtions
  // Declare subscriptions
  private subscriptions: Subscription[] = [];

  // red declration my variable
  products$: Observable<Product[]> = EMPTY;
  myProducts: Observable<Product[]> = EMPTY;
  loading$: Observable<boolean> = EMPTY;
  error$: Observable<any> = EMPTY;

  // categories$: Observable<Category[]> = EMPTY;
  productsWithCategory: { [category: string]: Product[] } = {};

  constructor(
    private storeProduct$: Store<ProductState>,
    private dialog: MatDialog,
    public dialog_delete: MatDialog,
  ) {}
  ngOnInit(): void {
    this.storeProduct$.dispatch(clearProducts());
    this.productsWithCategory = {};
    // green get all products
    this.storeProduct$.dispatch(loadProductsRequest());
    this.products$ = this.storeProduct$
      .select(getAllproductSelector)
      .pipe(map((products) => products.map((product) => ({ ...product }))));
    this.loading$ = this.storeProduct$.select(getLoadingSelector);
    this.error$ = this.storeProduct$.select(getErrorSelector);
  }
  // blue this for get key from the object
  objectKeys(obj: any): any {
    return Object.keys(obj);
  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    // this is to brevent repeat items in the array
    this.storeProduct$.dispatch(clearProducts());
  }

  openDialog(value: Product): void {
    const dialogRef = this.dialog.open(ItemProductDialogComponent, {
      // Pass the function as data to the dialog
      data: {
        item: value,
      },
    });
  }
  editProduct(product: Product) {


    let dialogRef = this.dialog_delete.open(UpdateItemProductDialogComponent, {
      width: '250px',
      data: { product: product },
    });

    dialogRef.afterClosed().subscribe((updatedProduct) => {
      console.log(updatedProduct);
      if (updatedProduct) {
        // console.log(updatedProduct);
         this.storeProduct$.dispatch(updateProductRequest({updatedProduct}))
      }
    });


  }
  deleteProduct(productId: string) {

let dialogRef = this.dialog_delete.open(DeleteDialogComponent, {
  width: '250px',
});

dialogRef.afterClosed().subscribe((result) => {
  console.log('The dialog was closed');
  if (result) {
    console.log(productId);
    this.storeProduct$.dispatch(deleteProductRequest({productId}))
  }
});

  }
}
