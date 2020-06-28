import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Models/persona.models';

@Injectable()
export class DataService{
    constructor(private httpClient: HttpClient){
    }

    loadPerson(){
        return this.httpClient.get('https://people-list-3a6f4.firebaseio.com/datos.json');
    }

    savePerson(personas: Persona[]){
        this.httpClient.put('https://people-list-3a6f4.firebaseio.com/datos.json',personas)
        .subscribe(
            response => {
                console.log("resultado de guardar Personas " + response);
            },
            error => console.log("Error al guardar personas: "+error)
        );
    }
}