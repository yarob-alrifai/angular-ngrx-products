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
  updateProductRequest,
  updateProductSuccess,
} from './product.actions';

// Define the initial state for the products
const initialStateProducts: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// Create the product reducer to handle actions
export const productReducer = createReducer(
  initialStateProducts,

  // Handle the request to load products
  on(loadProductsRequest, (state) => ({ ...state, loading: true })),

  // Handle the successful load of products
  on(loadProductsSuccess, (state, { items }) => ({
    ...state,
    loading: false,
    products: items,
  })),

  // Handle the failure to load products
  on(loadProductsFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),


  // Handle the request to delete a product
  on(deleteProductRequest, (state) => ({
    ...state,
    loading: true,
  })),

  // Handle the successful deletion of a product
  on(deleteProductSuccess, (state, { productId }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== productId),
  })),

  // Handle the failure to delete a product
  on(deleteProductFaild, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),

  // Handle the request to update a product
  on(updateProductRequest, (state) => ({
    ...state,
    loading: true,
  })),

  // Handle the successful update of a product
  on(updateProductSuccess, (state, { updatedProduct }) => ({
    ...state,
    products: state.products.map((product) =>
      product.id === updatedProduct.id ? { ...product, ...updatedProduct } : product
    ),
    loading: false,
    error: null,
  })),

  // Handle the failure to update a product
  on(updateProductFaild, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),

  // Handle the request to add a new product
  on(addProductRequest, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // Handle the successful addition of a new product
  on(addProductSuccess, (state, { newProduct }) => ({
    ...state,
    products: [...state.products, newProduct],
    loading: false,
  })),

  // Handle the failure to add a new product
  on(addProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
  ,
  on(clearProducts, (state) => ({
    // Return the initial state or an empty cart state
    ...initialStateProducts,
  }))
);
