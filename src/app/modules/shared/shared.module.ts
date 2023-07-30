import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './components/button/button.module';
import { MenubarModule } from './components/menubar/menubar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule
  ],
  exports: [
    ButtonModule,
    MenubarModule
  ]
})
export class SharedModule { }
