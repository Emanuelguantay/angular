import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { LoggingService } from './Servicios/LoggingService.service';
import { PersonaService } from './Servicios/PersonaService.service';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './personas/error/error.component';
import { DataService } from './Servicios/DataService.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    FormularioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    LoggingService,
    PersonaService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
