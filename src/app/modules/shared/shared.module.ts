import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './components/button/button.module';
import { CardModule } from './components/card/card.module';
import { SpecialbuttonModule } from './components/specialbutton/specialbutton.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    SpecialbuttonModule
  ]
})
export class SharedModule { }
