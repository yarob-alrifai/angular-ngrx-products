import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrl: './message-dialog.component.css' // StyleUrl should be styleUrls
})
export class MessageDialogComponent {
  message: string | undefined; // Define message property

  constructor(
    public dialogRef: MatDialogRef<MessageDialogComponent>, // Reference to the dialog
    @Inject(MAT_DIALOG_DATA) public data: any // Inject data passed to the dialog
  ) { }

  ngOnInit(): void {
    // Initialize message with the data passed to the dialog
    this.message = this.data.message;
  }

  // Method triggered when cancel button is clicked
  onNoClick(): void {
    // Close the dialog
    this.dialogRef.close();
  }
}
