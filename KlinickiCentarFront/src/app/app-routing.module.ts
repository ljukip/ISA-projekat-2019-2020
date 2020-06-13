import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import{LOGIN_PATH,REGISTRATION_PATH} from './paths_router';
import {RegistrationComponent} from './components/registration/registration.component'



const routes: Routes = [
  // { path: '**', component: DefaultLayoutComponent },
  { path: 'registration', component: RegistrationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
