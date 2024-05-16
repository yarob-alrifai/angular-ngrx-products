import { Product } from './../../store/product/product';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductFeature } from '../../store/product/product.selector';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
  private URL = "http://localhost:3000/products/";

  constructor(private httpClient:HttpClient) { }

  getAllProduct() {
    return this.httpClient.get<Product[]>(this.URL);
  }
  deleteProduct(productId: string){
    return this.httpClient.delete<Product>(this.URL+ productId);


}
updateProduct(product: Product){
    return this.httpClient.patch<Product>(this.URL+ product.id, product);

  }
addProduct(product: Product){
    return this.httpClient.post<Product>(this.URL, product);

  }




}


