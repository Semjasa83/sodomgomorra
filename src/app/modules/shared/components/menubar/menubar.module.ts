import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenubarComponent
  ]
})
export class MenubarModule { }
