import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import {
  addProductFailure,
  addProductRequest,
  addProductSuccess,
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
import { Product } from './product';
import { ApiProductService } from '../../Services/product/api-product.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../../shared/components/dialog/message-dialog/message-dialog.component';

@Injectable()
export class ProductStoreEffects {
  constructor(
    private dataService: ApiProductService,
    private actions$: Actions,
    private dialog: MatDialog
  ) {}

  // Effect to handle loading products
  loadProductRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductsRequest),
      switchMap(() => {
        return this.dataService.getAllProduct().pipe(
          // Map the successful response to loadProductsSuccess action
          map((items: Product[]) => {
            return loadProductsSuccess({ items });
          }),
          // Handle any errors and map to loadProductsFailed action
          catchError((error) => {
            return observableOf(loadProductsFailed({ error }));
          })
        );
      })
    )
  );

  // Effect to handle deleting a product
  deleteProductRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProductRequest),
      switchMap(({ productId }) => {
        return this.dataService.deleteProduct(productId).pipe(
          // Map the successful deletion to deleteProductSuccess action
          map(() => {
            return deleteProductSuccess({ productId });
          }),
          // Handle any errors and map to deleteProductFaild action
          catchError((error) => {
            return observableOf(deleteProductFaild({ error }));
          })
        );
      })
    )
  );

  // Effect to handle updating a product
  updateProductEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProductRequest),
      switchMap(({ updatedProduct }) =>
        this.dataService.updateProduct(updatedProduct).pipe(
          // Map the successful update to updateProductSuccess action
          map(() => updateProductSuccess({ updatedProduct })),
          // Handle any errors and map to updateProductFaild action
          catchError((error) => of(updateProductFaild({ error })))
        )
      )
    )
  );

  // Effect to open a dialog on successful product update
  openSuccessUpdatedDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProductSuccess),
      tap(() => {
        // Open dialog with success message
        this.dialog.open(MessageDialogComponent, {
          data: { message: 'Product updated successfully!' }
        });
      })
    ),
    { dispatch: false } // No further actions need to be dispatched
  );

  // Effect to handle adding a new product
  addProductEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProductRequest),
      switchMap(({ product }) =>
        this.dataService.addProduct(product).pipe(
          // Map the successful addition to addProductSuccess action
          map(newProduct => addProductSuccess({ newProduct })),
          // Handle any errors and map to addProductFailure action
          catchError((error) => of(addProductFailure({ error })))
        )
      )
    )
  );

  // Effect to open a dialog on successful product addition
  openSuccessAddDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProductSuccess),
      tap(() => {
        // Open dialog with success message
        this.dialog.open(MessageDialogComponent, {
          data: { message: 'Product added successfully!' }
        });
      })
    ),
    { dispatch: false } // No further actions need to be dispatched
  );

  // Effect to open a dialog on failed product addition
  openFailedDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProductFailure),
      tap(() => {
        // Open dialog with failure message
        this.dialog.open(MessageDialogComponent, {
          data: { message: 'Product addition failed!' }
        });
      })
    ),
    { dispatch: false } // No further actions need to be dispatched
  );
}
