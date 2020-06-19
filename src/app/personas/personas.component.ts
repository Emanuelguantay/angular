import { Component, OnInit } from '@angular/core';
import { Persona } from '../Models/persona.models';
import { LoggingService } from '../Servicios/LoggingService.service';
import { PersonaService } from '../Servicios/PersonaService.service';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html'
  })
export class PersonasComponent implements OnInit{
  agregarPersona = false;
  agregarPersonaStatus = "No se a agregado ninguna persona";
  tituloPersona = "Listado de Personas";
  personaCreada = false;

  personas: Persona[] = [];
  
  constructor(
    private loggingService: LoggingService,
    private personaService: PersonaService 
    ){
    // setTimeout(
    //   ()=>{
    //     this.agregarPersona=true;
    //   },
    // 3000);
  }
  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  // onCreatePersona(){
  //   this.personaCreada = true;
  //   this.agregarPersonaStatus = "Persona agregada";
  // }

  // onModificarPersona(event: Event){
  //   this.tituloPersona = (<HTMLInputElement>event.target).value;
  // }
  onPersonaAgregada(persona: Persona){
    //this.loggingService.enviaMensajeConsola("Persona cargada: "+ persona.nombre);
    //this.personas.push(persona);
    this.personaService.agregarPersona(persona);
  }
}