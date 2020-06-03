import { Component } from '@angular/core';
import {USER_ID_KEY,USER_ROLE_KEY,USERNAME_KEY,USER_TOKEN_KEY} from './Keys'
import {UserService} from './Services/UserService'

@Component({
  selector: 'KlinickiCentarFront-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KlinickiCentarFront';
  constructor(private _userService: UserService) {}
  isUserLoggedIn(): boolean {
    return this._userService.isUserLoggedIn();
  }

  isUserPatient(): boolean {
    return this._userService.isUserPatient();
  }

  isUserPhysician(): boolean {
  return this._userService.isUserPhysician();
  }

  isUserNurse(): boolean{
  return this._userService.isUserNurse();
  }

  isUserClinicA(): boolean {
  return this._userService.isUserClinicAdmnistrator();
  }

  isUserClinicalCenterA(): boolean {
  return this._userService.isUserClinicalCenterAdministrator();
  }

  
  onClickLogout(): void {
    localStorage.removeItem(USER_ID_KEY);
    localStorage.removeItem(USER_ROLE_KEY);
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(USER_TOKEN_KEY);
    alert('Logged out!');
  }
}
