// Import Angular Material modules for UI components
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
// Import Angular core modules
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// Import routing module for app navigation
import { AppRoutingModule } from './app-routing.module';
// Import main app component and other components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
// Import NgRx store and effects modules for state management
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Import product reducer and effects
import { productReducer } from './store/product/product.reducer';
import { ProductStoreEffects } from './store/product/product.effect';

// Import additional Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
// Import product-related components
import { ItemProductComponent } from './products/item-product/item-product.component';
import { ListItemProductComponent } from './products/list-item-product/list-item-product.component';
// Import shared and HTTP modules
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// Import admin-related components and module
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
// Import dialog component for product items
import { ItemProductDialogComponent } from './shared/components/dialog/item-product-dialog/item-product-dialog.component';
import { TestComponent } from './test/test.component';

// Define arrays for modular imports and declarations
const mats = [
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatButtonModule,
  RouterModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule
];

const products = [
  ProductsComponent,
  ItemProductComponent,
  ListItemProductComponent,
  ItemProductDialogComponent,
];

@NgModule({
  declarations: [
    products, // Declare product-related components
    AppComponent, // Main app component
    NavbarComponent, // Navbar component
    ProductsComponent, TestComponent, // Products component
  ],
  imports: [
    mats, // Import Angular Material modules
    AdminModule, // Import admin module
    HttpClientModule, // Import HTTP client module
    SharedModule, // Import shared module
    BrowserModule, // Import browser module
    AppRoutingModule, // Import app routing module
    // Configure NgRx store with product reducer
    StoreModule.forRoot({
      product: productReducer,
    }),
    // Configure NgRx effects with product store effects
    EffectsModule.forRoot([
      ProductStoreEffects,
    ]),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    provideClientHydration() // Provide client hydration service
  ],
  bootstrap: [AppComponent] // Bootstrap the main app component
})
export class AppModule { }
