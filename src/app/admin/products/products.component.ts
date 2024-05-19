import { Component, OnDestroy } from '@angular/core';
import { EMPTY, Observable, Subscription, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
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
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnDestroy {
  // Subject for unsubscribing from observables
  private unsubscribe$: Subject<void> = new Subject();

  // Observable to hold products data
  products$: Observable<Product[]> = EMPTY;

  // Observable to track loading state
  loading$: Observable<boolean> = EMPTY;

  // Observable to handle error state
  error$: Observable<any> = EMPTY;

  // Object to hold products categorized by their category
  productsWithCategory: { [category: string]: Product[] } = {};

  constructor(
    private storeProduct$: Store<ProductState>,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    // Initialize productsWithCategory object
    this.productsWithCategory = {};

    // Dispatch action to load products
    this.storeProduct$.dispatch(loadProductsRequest());

    // Subscribe to the products observable and map the products to add to the productsWithCategory object
    this.products$ = this.storeProduct$.select(getAllproductSelector).pipe(
      map((products) => products.map((product) => ({ ...product })))
    );

    // Subscribe to loading state
    this.loading$ = this.storeProduct$.select(getLoadingSelector);

    // Subscribe to error state
    this.error$ = this.storeProduct$.select(getErrorSelector);
  }

  // Function to get keys from an object
  objectKeys(obj: any): any {
    return Object.keys(obj);
  }

  // Function to open dialog to display product details
  openDialog(value: Product): void {
    const dialogRef = this.dialog.open(ItemProductDialogComponent, {
      data: {
        item: value,
      },
    });
  }

  // Function to open dialog to edit product
  editProduct(product: Product) {
    const dialogRef = this.dialog.open(UpdateItemProductDialogComponent, {
      width: '250px',
      data: { product: product },
    });

    // Subscribe to dialog close event to update product
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((updatedProduct) => {
        if (updatedProduct) {
          this.storeProduct$.dispatch(updateProductRequest({ updatedProduct }));
        }
      });
  }

  // Function to open dialog to confirm product deletion
  deleteProduct(productId: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });

    // Subscribe to dialog close event to delete product
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result) => {
        if (result) {
          this.storeProduct$.dispatch(deleteProductRequest({ productId }));
        }
      });
  }

  // Unsubscribe from observables to prevent memory leaks
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.storeProduct$.dispatch(clearProducts());

  }
}
