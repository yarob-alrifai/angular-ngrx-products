import { Product } from './../store/product/product';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, Subscription, map, of, switchMap } from 'rxjs';
import { ProductState } from '../store/product/product';
import {
  clearProducts,
  loadProductsRequest,
} from '../store/product/product.actions';
import {
  getAllproductSelector,
  getErrorSelector,
  getLoadingSelector,
} from '../store/product/product.selector';

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
  loading$: Observable<boolean> = EMPTY;
  error$: Observable<any> = EMPTY;

  // categories$: Observable<Category[]> = EMPTY;
  productsWithCategory: { [category: string]: Product[] } = {};
  newarray: { [category: string]: any[] } = {};
  constructor(
    private storeProduct$: Store<ProductState>,

  ) {}

  ngOnInit(): void {

    this.storeProduct$.dispatch(clearProducts());
    this.productsWithCategory = {};
    // green get all products
    this.storeProduct$.dispatch(loadProductsRequest());
    this.products$ = this.storeProduct$
      .select(getAllproductSelector)
      .pipe(
        map((products) =>
          products.map((product) => ({ ...product, quantity: 0 }))
        )
      );
    this.loading$ = this.storeProduct$.select(getLoadingSelector);
    this.error$ = this.storeProduct$.select(getErrorSelector);
    // green get all categories
    const productsSubscription = this.products$.pipe().subscribe((res) =>
      res.forEach((p) => {
        if (!this.productsWithCategory[p.category]) {
          this.productsWithCategory[p.category] = [];
        }
        this.productsWithCategory[p.category].push(p);
      })
    );

    this.subscriptions.push(productsSubscription);
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

  // red its important dont delete it please !!!!!
  // getCategoryName(categoryId: string): string {
  //   const category = this.productsWithCategory[categoryId][0]; // Assuming all products in the same category have the same name
  //   return category ? category.name : 'Unknown';
  // }
  // red its important dont delete it please !!!!!
}
