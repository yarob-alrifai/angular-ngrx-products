// Import necessary modules from Angular core and router packages
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import the components that will be used in the routes
import { ProductsComponent } from './products/products.component';
// Import the Admin routing module
import { AdminRoutingModule } from './admin/admin-routing.module';
import { CommonModule } from '@angular/common';

// Define the application routes
const routes: Routes = [
  { path: 'products', component: ProductsComponent }, // Route to display the products component
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    // Lazy load the admin module
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' } // Redirect to products route if no path is specified
];

@NgModule({
  // Import necessary modules including the CommonModule and RouterModule with the defined routes
  imports: [CommonModule, RouterModule.forRoot(routes)],
  // Export RouterModule to make it available throughout the app
  exports: [RouterModule]
})
export class AppRoutingModule { }
