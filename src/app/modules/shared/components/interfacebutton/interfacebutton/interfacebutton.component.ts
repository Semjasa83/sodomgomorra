import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-ibutton',
  templateUrl: './interfacebutton.component.html',
  styleUrls: ['./interfacebutton.component.scss']
})
export class InterfacebuttonComponent {
  @Input() buttonText?: string;
  @Input() buttonWidth?: string;
  @Input() iconName?: string;
  @Input() imgSrc?: string;

  @Input() buttonColor?: string;
  @Input() textColor?: string;
  @Input() iconColor?: string;

}
