import { Persona } from '../Models/persona.models';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonaService{
    personas: Persona[] = [new Persona("juan", "Quispe"), new Persona("Emanuel", "Guantay")];
    saludar = new EventEmitter<number>();

    constructor(private logginService: LoggingService){

    }

    agregarPersona(persona: Persona){
        this.logginService.enviaMensajeConsola("Peronsa agregada "+ persona.nombre);
        this.personas.push(persona);
      }
}