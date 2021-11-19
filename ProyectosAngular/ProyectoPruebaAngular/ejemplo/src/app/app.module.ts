import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './components/mycomponent/mycomponent.component';
import { ChorizoComponent } from './components/chorizo/chorizo.component';
import { JuanitoJuanComponent } from './components/juanito-juan/juanito-juan.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    ChorizoComponent,
    JuanitoJuanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
