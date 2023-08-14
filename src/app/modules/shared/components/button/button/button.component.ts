import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'sg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonText?: string;
  @Input() buttonWidth?: string;
  @Input() iconName?: string;
  @Input() imgSrc?: string;

  @Input() buttonColor?: string;
  @Input() textColor?: string;
  @Input() iconColor?: string;


}
