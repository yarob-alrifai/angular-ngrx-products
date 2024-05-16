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

  loadProductRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductsRequest),
      switchMap(() => {
        return this.dataService.getAllProduct().pipe(
          //  tap(items=> console.log(items)),
          map((items: Product[]) => {
            return loadProductsSuccess({ items });
          }),

          catchError((error) => {
            return observableOf(loadProductsFailed({ error }));
          })
        );
      })
    )
  );

    //red Effect for deleting a product
    deleteProductRequestEffect$ = createEffect(() =>
      this.actions$.pipe(
        ofType(deleteProductRequest),
        switchMap(({ productId }) => {
          return this.dataService.deleteProduct(productId).pipe(
            map(() => {
              return deleteProductSuccess({ productId });
            }),
            catchError((error) => {
              return observableOf(deleteProductFaild({ error }));
            })
          );
        })
      )
    );


    // orange update the product

    updateProductEffect$ = createEffect(() =>
      this.actions$.pipe(
        ofType(updateProductRequest),
        switchMap(({ updatedProduct }) =>
          this.dataService.updateProduct(updatedProduct).pipe(
            map(() => updateProductSuccess({  updatedProduct })),
            catchError((error) => of(updateProductFaild({ error })))
          )
        )
      )
    );

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
      { dispatch: false } // We don't need to dispatch any further actions
    );


// green add product

addProductEffect$ = createEffect(() =>
  this.actions$.pipe(
    ofType(addProductRequest),
    switchMap(({ product }) =>
      this.dataService.addProduct(product).pipe(
        map(newProduct => addProductSuccess({  newProduct })),
        catchError((error) => of(addProductFailure({ error })))
      )
    )
  )
);

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
  { dispatch: false } // We don't need to dispatch any further actions
);

openFailedDialog$ = createEffect(() =>
  this.actions$.pipe(
    ofType(addProductFailure),
    tap(() => {
      // Open dialog with success message
      this.dialog.open(MessageDialogComponent, {
        data: { message: 'Product added failed!' }
      });
    })
  ),
  { dispatch: false } // We don't need to dispatch any further actions
);

}
