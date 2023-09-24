import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sg-button',
  standalone: true,
  imports: [CommonModule],
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
