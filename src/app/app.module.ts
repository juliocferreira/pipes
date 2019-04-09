import { LoteriaService } from './service/loteria.service';
import { FilmeService } from './service/filme.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExemplosComponent } from './exemplos/exemplos.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FiltroPipe } from './filtro.pipe';
import { ListaComponent } from './lista/lista.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosComponent,
    CamelCasePipe,
    FiltroPipe,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    FilmeService,
    LoteriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
