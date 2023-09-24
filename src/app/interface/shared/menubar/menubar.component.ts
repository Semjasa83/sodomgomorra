import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "../button/button.component";
import {DropdownComponent} from "../dropdown/dropdown.component";

@Component({
  selector: 'sg-menubar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    DropdownComponent,
  ],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

}
