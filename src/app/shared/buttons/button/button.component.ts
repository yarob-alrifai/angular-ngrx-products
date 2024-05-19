import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonClass: string = ''; // Input property for custom CSS classes
  @Input() buttonStyle: string = ''; // Input property for custom inline styles
  @Input() buttonColor: string = ''; // Input property for button color
  @Input() disabled: boolean = false; // Input property to disable the button
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>(); // Output event emitter for button click
}
