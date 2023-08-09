import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  @Input() left?: boolean;
  @Input() center?: boolean;
  @Input() right?: boolean;
}
