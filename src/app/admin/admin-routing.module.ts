
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ProductsComponent } from '../admin/products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CommonModule } from '@angular/common';


const adminRoutes: Routes = [
  {
    path: 'admin',

    component: AdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'add-product', component: AddProductComponent },


    ]
  }
];

@NgModule({
  imports: [ CommonModule,RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
