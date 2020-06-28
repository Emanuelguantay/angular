import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './personas/error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './Servicios/LoginGuardService.service';

const routes: Routes = [
  { path: '', component: PersonasComponent, canActivate:[LoginGuardService] },
  { path: 'personas', component: PersonasComponent, canActivate:[LoginGuardService], children:[
    { path: 'agregar', component: FormularioComponent },
    {  path: ':id', component: FormularioComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
