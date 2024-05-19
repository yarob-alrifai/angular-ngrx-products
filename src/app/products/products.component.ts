import { Product } from './../store/product/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { ProductState } from '../store/product/product';
import { loadProductsRequest } from '../store/product/product.actions';
import { getAllproductSelector, getErrorSelector, getLoadingSelector } from '../store/product/product.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  products$: Observable<Product[]> = EMPTY;
  loading$: Observable<boolean> = EMPTY;
  error$: Observable<any> = EMPTY;

  productsWithCategory: { [category: string]: Product[] } = {};

  constructor(private storeProduct$: Store<ProductState>) {}

  ngOnInit(): void {
    // Dispatch action to load products
    this.storeProduct$.dispatch(loadProductsRequest());

    // Select products, loading state, and error state from the store
    this.products$ = this.storeProduct$.select(getAllproductSelector);
    this.loading$ = this.storeProduct$.select(getLoadingSelector);
    this.error$ = this.storeProduct$.select(getErrorSelector);

    // Subscribe to products and categorize them by category
    const productsSubscription = this.products$.subscribe((products) =>
      products.forEach((product) => {
        if (!this.productsWithCategory[product.category]) {
          this.productsWithCategory[product.category] = [];
        }
        this.productsWithCategory[product.category].push(product);
      })
    );

    // Add subscription to the list of subscriptions
    this.subscriptions.push(productsSubscription);
  }

  // Function to get keys from an object
  objectKeys(obj: any): any {
    return Object.keys(obj);
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
