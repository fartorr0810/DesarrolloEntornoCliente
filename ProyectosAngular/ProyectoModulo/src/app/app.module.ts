import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuloContador } from './ModuloComponente/Modulo-componente';
import { BrawlStarwsModule } from './brawl-starws/brawl-starws.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ModuloContador,
    BrawlStarwsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
