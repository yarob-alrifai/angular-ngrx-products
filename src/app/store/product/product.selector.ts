import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product';

// Select the 'product' feature state
export const ProductFeature = createFeatureSelector<ProductState>('product');

// Create a selector to get all products from the state
export const getAllproductSelector = createSelector(
  ProductFeature,
  (state: ProductState) => state.products
);

// Create a selector to get the loading status from the state
export const getLoadingSelector = createSelector(
  ProductFeature,
  (state: ProductState) => state.loading
);

// Create a selector to get the error status from the state
export const getErrorSelector = createSelector(
  ProductFeature,
  (state: ProductState) => state.error
);
