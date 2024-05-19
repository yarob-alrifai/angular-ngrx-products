import { Component } from '@angular/core';
import { Product, ProductState } from '../../store/product/product';
import { Store } from '@ngrx/store';
import { addProductRequest } from '../../store/product/product.actions';
import { faker } from '@faker-js/faker'; // Assuming you're using the faker library for generating fake data

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private storeProduct$: Store<ProductState>) {}

  // Initialize a newProduct object with default values
  newProduct: Product = {
    name: '',
    category: '',
    description: '',
    price: 0,
    id: faker.number.int({ min: 1, max: 100 }).toString(), // Generate a fake ID
    addedOn: new Date().toISOString(), // Set the current date and time
    imageUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/26.jpg',
    quantity: 0,
  };

  // Method triggered when the form is submitted
  onSubmit() {
    // Dispatch an action to add the new product
    this.storeProduct$.dispatch(
      addProductRequest({ product: this.newProduct })
    );

    // Reset the newProduct object to clear the form fields
    this.newProduct = {
      name: '',
      category: '',
      description: '',
      price: 0,
      id: faker.number.int({ min: 1, max: 100 }).toString(), // Generate a new fake ID
      addedOn: new Date().toISOString(), // Set the current date and time
      imageUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/26.jpg',
      quantity: 0,
    };
  }
}
