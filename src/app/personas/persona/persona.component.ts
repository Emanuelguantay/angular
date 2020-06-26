import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../Models/persona.models';
import { PersonaService } from '../../Servicios/PersonaService.service';

@Component({
    selector: 'app-persona',
    templateUrl: './persona.component.html'
  })
export class PersonaComponent implements OnInit{

    @Input() persona: Persona;
    @Input() indice: number;
    constructor( private personaService: PersonaService){

    }

    ngOnInit(){

    }

    emitirSaludo(){
      this.personaService.saludar.emit(this.indice);
    }

}