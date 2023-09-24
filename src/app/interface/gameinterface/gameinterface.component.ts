import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarComponent} from "../shared/menubar/menubar.component";
import {ButtonComponent} from "../shared/button/button.component";

@Component({
  selector: 'sg-gameinterface',
  standalone: true,
  imports: [
    CommonModule,
    MenubarComponent,
    ButtonComponent
  ],
  templateUrl: './gameinterface.component.html',
  styleUrls: ['./gameinterface.component.scss']
})
export class GameinterfaceComponent {

}
