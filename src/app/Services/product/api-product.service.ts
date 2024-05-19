// Import the Product interface
import { Product } from './../../store/product/product';

// Import Angular core and HTTP client modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Decorator to make the service injectable and provided at the root level
@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
  // Base URL for the product API

  private URL = "http://localhost:3000/products/";

  // Inject the HttpClient service for making HTTP requests
  constructor(private httpClient: HttpClient) { }

  // Method to get all products from the API
  getAllProduct() {
    return this.httpClient.get<Product[]>(this.URL);
  }

  // Method to delete a product by its ID
  deleteProduct(productId: string) {
    return this.httpClient.delete<Product>(this.URL + productId);
  }

  // Method to update a product's details
  updateProduct(product: Product) {
    return this.httpClient.patch<Product>(this.URL + product.id, product);
  }

  // Method to add a new product
  addProduct(product: Product) {
    return this.httpClient.post<Product>(this.URL, product);
  }
}
