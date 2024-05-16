import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product';

export const ProductFeature = createFeatureSelector<ProductState>('product');

export const getAllproductSelector = createSelector(
  ProductFeature,
  (state: ProductState) => state.products
);

export const getLoadingSelector = createSelector(
  ProductFeature,
  (state: ProductState) => state.loading
);

export const getErrorSelector = createSelector(
  ProductFeature,
  (state: ProductState) => state.error
);
