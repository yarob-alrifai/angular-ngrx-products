import { createAction, props } from '@ngrx/store';
import { Product } from './product';

export const loadProductsRequest = createAction(
  '[product component] load products request'
);
export const loadProductsSuccess = createAction(
  '[product component] load products Success',
  props<{ items: Product[] }>()
);
export const loadProductsFailed = createAction(
  '[product component] load products Failed',
  props<{ error: any }>()
);
export const clearProducts = createAction('[product component] Clear Products');

export const updateProductQuantity = createAction(
  '[Product] Update Quantity',
  props<{ productId: string; quantity: number }>()
);


// red  Actions for delete product
export const deleteProductRequest = createAction(
  '[Product] Delete Product Request',
  props<{ productId: string }>()
);export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ productId: string }>()
);export const deleteProductFaild = createAction(
  '[Product] Delete Product Faild',
  props<{ error: any }>()
);


// orange update product

export const updateProductRequest = createAction(
  '[Product] Update Product Request',
  props<{ updatedProduct: Product }>()
);

// Action dispatched when product update is successful
export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{  updatedProduct: Product }>()
);

// Action dispatched when product update fails
export const updateProductFaild = createAction(
  '[Product] Update Product Faild',
  props<{ error: any }>()
);



// blue add product

export const addProductRequest = createAction(
  '[Product] Add Product Request',
  props<{ product: Product }>()
);
export const addProductSuccess = createAction(
  '[Product] Add Product Success',
  props<{ newProduct: Product }>()
);
export const addProductFailure = createAction(
  '[Product] Add Product Failure',
  props<{ error: any }>()
);
