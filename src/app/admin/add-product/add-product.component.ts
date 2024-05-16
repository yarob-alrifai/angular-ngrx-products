import { Component } from '@angular/core';
import { Product, ProductState } from '../../store/product/product';
import { Store } from '@ngrx/store';
import { addProductRequest } from '../../store/product/product.actions';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(private storeProduct$: Store<ProductState>) {}

  newProduct: Product = {
    name: '',
    category: '',
    description: '',
    price: 0,

    id: faker.number.int({ min: 1, max: 100 }).toString(),
    addedOn: new Date().toISOString(),
    imageUrl:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/26.jpg',
    quantity: 0,
  };

  onSubmit() {
    this.storeProduct$.dispatch(
      addProductRequest({ product: this.newProduct })
    );

    this.newProduct = {
      name: '',
      category: '',
      description: '',
      price: 0,
      id: faker.number.int({ min: 1, max: 100 }).toString(),
            addedOn: new Date().toISOString(),
      imageUrl:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/26.jpg',
      quantity: 0,
    };
  }
}
