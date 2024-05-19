import { createAction, props } from '@ngrx/store';
import { Product } from './product';

// Action to request loading products
export const loadProductsRequest = createAction(
  '[Product Component] Load Products Request'
);

// Action dispatched when products are successfully loaded
export const loadProductsSuccess = createAction(
  '[Product Component] Load Products Success',
  props<{ items: Product[] }>()
);

// Action dispatched when loading products fails
export const loadProductsFailed = createAction(
  '[Product Component] Load Products Failed',
  props<{ error: any }>()
);


//red  Actions for deleting a product

// Action to request product deletion
export const deleteProductRequest = createAction(
  '[Product] Delete Product Request',
  props<{ productId: string }>()
);

// Action dispatched when product deletion is successful
export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ productId: string }>()
);

// Action dispatched when product deletion fails
export const deleteProductFaild = createAction(
  '[Product] Delete Product Failed',
  props<{ error: any }>()
);

//orange Actions for updating a product

// Action to request product update
export const updateProductRequest = createAction(
  '[Product] Update Product Request',
  props<{ updatedProduct: Product }>()
);

// Action dispatched when product update is successful
export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ updatedProduct: Product }>()
);

// Action dispatched when product update fails
export const updateProductFaild = createAction(
  '[Product] Update Product Failed',
  props<{ error: any }>()
);

//green Actions for adding a product

// Action to request adding a new product
export const addProductRequest = createAction(
  '[Product] Add Product Request',
  props<{ product: Product }>()
);

// Action dispatched when adding a new product is successful
export const addProductSuccess = createAction(
  '[Product] Add Product Success',
  props<{ newProduct: Product }>()
);

// Action dispatched when adding a new product fails
export const addProductFailure = createAction(
  '[Product] Add Product Failure',
  props<{ error: any }>()
);

export const clearProducts = createAction('[product component] Clear Products');

