import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../Models/persona.models';
import { LoggingService } from '../Servicios/LoggingService.service';
import { PersonaService } from '../Servicios/PersonaService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //@Output() personaCreada = new EventEmitter<Persona>();
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  // nombreInput: string;
  // apellidoInput: string;

  constructor( private loggingService: LoggingService,
                private personaService: PersonaService ) { 
                  this.personaService.saludar.subscribe(
                    (indice: number) => alert("El indice es "+ indice)
                  );
                }


  ngOnInit(): void {
  }

  onAgregarPersona(){
    let persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    //this.loggingService.enviaMensajeConsola("Cargamos persona: "+ persona.nombre + ' '+ persona.apellido);
    //this.personaCreada.emit(persona);
    this.personaService.agregarPersona(persona);
  }

}
