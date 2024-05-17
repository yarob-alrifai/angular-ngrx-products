import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './store/product/product.reducer';
import { ProductStoreEffects } from './store/product/product.effect';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ItemProductComponent } from './products/item-product/item-product.component';
import { ListItemProductComponent } from './products/list-item-product/list-item-product.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { ItemProductDialogComponent } from './shared/components/dialog/item-product-dialog/item-product-dialog.component';

const mats = [
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatButtonModule,
  RouterModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule,
  MatSidenavModule ,
  MatToolbarModule ,
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
    products,
    AppComponent,
    NavbarComponent,
    ProductsComponent,

  ],
  imports: [
    mats,
    AdminModule,
    HttpClientModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      product: productReducer,
    }),
    EffectsModule.forRoot([
      ProductStoreEffects,
    ]),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
