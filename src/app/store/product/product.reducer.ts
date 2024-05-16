import { createReducer, on } from '@ngrx/store';
import { ProductState } from './product';
import {
  addProductFailure,
  addProductRequest,
  addProductSuccess,
  clearProducts,
  deleteProductFaild,
  deleteProductRequest,
  deleteProductSuccess,
  loadProductsFailed,
  loadProductsRequest,
  loadProductsSuccess,
  updateProductFaild,
  updateProductQuantity,
  updateProductRequest,
  updateProductSuccess,
} from './product.actions';

const initialStateProducts: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialStateProducts,
  on(loadProductsRequest, (state) => ({ ...state, loading: true })),
  on(loadProductsSuccess, (state, { items }) => ({
    ...state,
    loading: false,
    products: items,
  })),
  on(loadProductsFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(updateProductQuantity, (state, { productId, quantity }) => {
    const updatedProducts = state.products.map((product) => {
      if (product.id === productId) {
        // Update the quantity of the target product
        return { ...product, quantity };
      }
      return product;
    });

    return { ...state, products: updatedProducts };
  }),
  on(clearProducts, (state) => ({
    // Return the initial state or an empty cart state
    ...initialStateProducts,
  })),
  // red delete product
  on(deleteProductRequest, (state) => ({
    ...state,
    loading: true,
  })),
  on(deleteProductSuccess, (state, { productId }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== productId),
  })),
  on(deleteProductFaild, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(updateProductRequest, (state) => ({
    ...state,
    loading: true

  })),
  on(updateProductSuccess, (state, {  updatedProduct }) => ({
    ...state,
    products: state.products.map((product) =>
      product.id === updatedProduct.id ? { ...product, ...updatedProduct } : product
    ),
    loading: false,
    error: null,
  })),
  on(updateProductFaild, (state, { error }) => ({
    ...state,
    loading: false,
    error:error,
  })),
  on(addProductRequest, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(addProductSuccess, (state, { newProduct }) => ({
    ...state,
    products: [...state.products, newProduct],
    loading: false
  })),

  on(addProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  }))
);
