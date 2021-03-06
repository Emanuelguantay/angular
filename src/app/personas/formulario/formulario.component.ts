import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../../Models/persona.models';
import { LoggingService } from '../../Servicios/LoggingService.service';
import { PersonaService } from '../../Servicios/PersonaService.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //@Output() personaCreada = new EventEmitter<Persona>();
  
  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdit: number;
  constructor( private loggingService: LoggingService,
                private personaService: PersonaService,
                private router: Router,
                private route: ActivatedRoute
                ) 
                { 
                  this.personaService.saludar.subscribe(
                    (indice: number) => alert("El indice es "+ indice)
                  );
                }


  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdit = +this.route.snapshot.queryParams['modeEdicion'];
    console.log(this.modoEdit);
    // if(this.index){
    if( this.modoEdit && this.modoEdit === 1 ){
      let persona: Persona = this.personaService.findPerson(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onSavePerson(){
    //let persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    //if (this.index){
    if( this.modoEdit && this.modoEdit === 1 ){  
      this.personaService.editPerson(this.index, persona);
    }else{
      this.personaService.agregarPersona(persona);
    }
    this.router.navigate(['personas']);
    
  }

  deletedPerson(){
    if(this.index){
      this.personaService.deletedPerson(this.index);
    }
    this.router.navigate(['personas']);
  }

}
