import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../../Models/persona.models';
import { LoggingService } from '../../Servicios/LoggingService.service';
import { PersonaService } from '../../Servicios/PersonaService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //@Output() personaCreada = new EventEmitter<Persona>();
  
  nombreInput: string;
  apellidoInput: string;

  constructor( private loggingService: LoggingService,
                private personaService: PersonaService ) 
                { 
                  this.personaService.saludar.subscribe(
                    (indice: number) => alert("El indice es "+ indice)
                  );
                }


  ngOnInit(): void {
  }

  onAgregarPersona(){
    //let persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personaService.agregarPersona(persona);
  }

}
