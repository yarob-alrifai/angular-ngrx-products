import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mini-button',
  templateUrl: './mini-button.component.html',
  styleUrl: './mini-button.component.css'
})
export class MiniButtonComponent {
  @Input() buttonClass: string = '';
  @Input() buttonStyle: string = '';
  @Input() buttonColor: string = '';
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
}
