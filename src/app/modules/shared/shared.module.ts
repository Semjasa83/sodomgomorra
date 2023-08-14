import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './components/button/button.module';
import { MenubarModule } from './components/menubar/menubar.module';
import {DropdownModule} from "./components/dropdown/dropdown.module";
import {DropdownComponent} from "./components/dropdown/dropdown/dropdown.component";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    DropdownModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    DropdownComponent
  ]
})
export class SharedModule { }
