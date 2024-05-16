import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonClass: string = '';
  @Input() buttonStyle: string = '';
  @Input() buttonColor: string = '';
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
}
