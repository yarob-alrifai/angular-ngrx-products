import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuesPipe } from './pipes/values.pipe';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './buttons/button/button.component';
import { DeleteDialogComponent } from './components/dialog/delete-dialog/delete-dialog.component';
import { UpdateItemProductDialogComponent } from './components/dialog/update-item-product-dialog/update-item-product-dialog.component';
import { FormsModule } from '@angular/forms';
import { MessageDialogComponent } from './components/dialog/message-dialog/message-dialog.component';

const mats = [
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatButtonModule,
  RouterModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule,
  FormsModule
];

@NgModule({
  declarations: [ValuesPipe, ButtonComponent, DeleteDialogComponent, UpdateItemProductDialogComponent, MessageDialogComponent],
  imports: [CommonModule, mats],
  exports: [ValuesPipe, ButtonComponent],
})
export class SharedModule {}
