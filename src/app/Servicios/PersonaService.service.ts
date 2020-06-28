import { Persona } from '../Models/persona.models';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './DataService.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class PersonaService{
    personas: Persona[];
    saludar = new EventEmitter<number>();

    constructor(private logginService: LoggingService,
                private dataService: DataService
      ){
    }

    setPersonas(personas: Persona[]){
      this.personas = personas;
    }

    agregarPersona(persona: Persona){
        this.logginService.enviaMensajeConsola("Peronsa agregada "+ persona.nombre);
        if (persona == null){
          this.personas = [];
        }
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
        this.dataService.editPerson(index, persona);
      }

      deletedPerson(index: number){
        this.personas.splice(index,1);
        this.dataService.deletedPerson(index);
        //TODO: Recarga de la lista modificar!!
        this.editPersonList();
      }

      editPersonList(){
        if (this.personas != null){
          this.dataService.savePerson(this.personas);
        }
      }

      loadPersonList(){
        return this.dataService.loadPerson();
      }
}