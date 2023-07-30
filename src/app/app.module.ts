import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { LoginComponent } from './modules/login/login.component';
import { GameinterfaceComponent } from './modules/gameinterface/gameinterface.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameinterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
