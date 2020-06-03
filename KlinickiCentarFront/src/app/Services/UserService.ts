import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USER_ID_KEY, USER_ROLE_KEY } from '../Keys';
import { API_GET_USER } from '../paths_api';
import { User } from '../model/users/user';
import { ApiService } from '../services/service_api';
import { ConfigService } from '../services/service_config';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    private user:User;
    currentUser;
    private usersUrl: string;

    role:String= localStorage.getItem(USER_ROLE_KEY);
 
    
    _url = 'http://localhost:8081/registration';
    _url1 = 'http://localhost:8081/users/public';

    constructor(private _http: HttpClient, private apiService: ApiService, private config: ConfigService) {
        this.usersUrl = 'http://localhost:8081/registration';
     }

    getUser(userId: number): Observable<any> {
        return this._http.get(`${this._url1}/${userId}`);
    }
    
    isRegistered (): Observable<any> {
        if (localStorage.getItem(USER_ID_KEY) == null) {
           return this._http.get(`http://localhost:8081/registration`);
        }
    }

    isUserLoggedIn(): boolean {
        return (localStorage.getItem(USER_ID_KEY) != null);
    }

    isUserPatient(): boolean {
        if(this.isUserLoggedIn()) {
            this.user = JSON.parse(sessionStorage.getItem("user"));
            if(this.user.role==="ROLE_PATIENT"){
                return true;
            }
            return false
        }
        return false;
    }

    isUserPhysician(): boolean {
        if(this.isUserLoggedIn()) {
            this.user = JSON.parse(sessionStorage.getItem("user"));
            if(this.user.role==="ROLE_PHYSICIAN"){
                return true;
            }
            return false
        }

        return false;
    }

    isUserNurse(): boolean {
        if(this.isUserLoggedIn()) {
            this.user = JSON.parse(sessionStorage.getItem("user"));
            if(this.user.role==="ROLE_NURSE"){
                return true;
            }
            return false
        }

        return false;
    }

    isUserClinicAdmnistrator(): boolean {
        if(this.isUserLoggedIn()) {
            this.user = JSON.parse(sessionStorage.getItem("user"));
            if(this.user.role==="ROLE_CLINIC_A"){
                return true;
            }
            return false
        }

        return false;
    }

    isUserClinicalCenterAdministrator(): boolean {
        if(this.isUserLoggedIn()) {
            this.user = JSON.parse(sessionStorage.getItem("user"));
            if(this.user.role==="ROLE_CLINICAL_CENTER_A"){
                return true;
            }
            return false
        }

        return false;
    }

    public getUserInfo(): Observable<any> {
        const userId = localStorage.getItem(USER_ID_KEY);
        return this._http.get(`${API_GET_USER}/${userId}`);
    }

    initUser() {
        const promise = this.apiService.get(this.config.refresh_token_url).toPromise()
          .then(res => {
            if (res.access_token !== null) {
              return this.getMyInfo().toPromise()
                .then(user => {
                  this.currentUser = user;
                });
            }
          })
          .catch(() => null);
        return promise;
    }

    setupUser(user) {
        this.currentUser = user;
    }

    getMyInfo() {
        return this.apiService.get(this.config.whoami_url)
          .pipe(map(user => {
            this.currentUser = user;
            return user;
          }));
      }
    
}