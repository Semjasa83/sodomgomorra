import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-ibutton',
  templateUrl: './interfacebutton.component.html',
  styleUrls: ['./interfacebutton.component.scss']
})
export class InterfacebuttonComponent {
  @Input() buttonText?: string;
  @Input() iconSrc?: string;
  @Input() altText?: string;
  @Input() buttonColor?: string;
  @Input() textColor?: string;
  @Input() buttonWidth?: string;
}
