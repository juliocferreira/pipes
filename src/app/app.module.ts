import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosComponent } from './exemplos/exemplos.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
