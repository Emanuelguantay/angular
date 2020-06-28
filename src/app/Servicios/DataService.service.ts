import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Models/persona.models';
import { LoginService } from './loginService.service';

@Injectable()
export class DataService{
    constructor(private httpClient: HttpClient,
                private loginService: LoginService){
    }

    loadPerson(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://people-list-3a6f4.firebaseio.com/datos.json?auth='+ token);
    }

    savePerson(personas: Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://people-list-3a6f4.firebaseio.com/datos.json?auth='+ token,personas)
        .subscribe(
            response => {
                console.log("resultado de guardar Personas " + response);
            },
            error => console.log("Error al guardar personas: "+error)
        );
    }

    editPerson(index: number, person: Persona){
        const token = this.loginService.getIdToken();
        let url: string ='https://people-list-3a6f4.firebaseio.com/datos/'+ index+'.json?auth='+ token;
        this.httpClient.put(url, person)
        .subscribe(
            response => {
                console.log("resultado de editar Personas " + response);
            },
            error => console.log("Error al editar personas: "+error)
        );
    }

    deletedPerson(index:number){
        const token = this.loginService.getIdToken();
        let url: string ='https://people-list-3a6f4.firebaseio.com/datos/'+ index+'.json?auth='+ token;
        this.httpClient.delete(url)
        .subscribe(
            response => {
                console.log("resultado de eliminar Personas " + response);
            },
            error => console.log("Error al eliminar personas: "+error)
        );
    }
}