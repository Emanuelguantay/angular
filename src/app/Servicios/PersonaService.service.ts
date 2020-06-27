import { Persona } from '../Models/persona.models';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './DataService.service';

@Injectable()
export class PersonaService{
    personas: Persona[] = [new Persona("juan", "Quispe"), new Persona("Emanuel", "Guantay")];
    saludar = new EventEmitter<number>();

    constructor(private logginService: LoggingService,
                private dataService: DataService
      ){
    }

    agregarPersona(persona: Persona){
        this.logginService.enviaMensajeConsola("Peronsa agregada "+ persona.nombre);
        this.personas.push(persona);
        this.dataService.savePerson(this.personas);
      }

      findPerson(index: number){
        let persona: Persona = this.personas[index];
        return persona;
      }

      editPerson(index: number, persona: Persona){
        let personaEdit: Persona= this.personas[index];
        personaEdit.nombre = persona.nombre;
        personaEdit.apellido = persona.apellido;
      }

      deletedPerson(index: number){
        this.personas.splice(index,1);
      }
}