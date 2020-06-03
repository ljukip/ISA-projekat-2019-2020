import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LOGIN_PATH,REGISTRATION_PATH} from './paths_router';
import {RegistrationComponent} from './components/registration/registration'


const routes: Routes = [
  { path: REGISTRATION_PATH, component: RegistrationComponent },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
