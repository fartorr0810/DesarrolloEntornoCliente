import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentesencilloComponent } from './componentesencillo/componentesencillo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesencilloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
