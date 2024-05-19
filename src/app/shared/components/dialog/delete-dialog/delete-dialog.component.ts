import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>, // Reference to the dialog
    @Inject(MAT_DIALOG_DATA) public data: any // Inject data passed to the dialog
  ) { }

  // Method triggered when cancel button is clicked
  onNoClick(): void {
    // Close the dialog
    this.dialogRef.close();
  }

}
