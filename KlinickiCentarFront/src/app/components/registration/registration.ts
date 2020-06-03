import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService';
import { User } from 'src/app/model/users/user';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.html',
    styleUrls: ['./registration.css']
  })

export class RegistrationComponent {
    title = 'Registration';
    user: User;
 
    constructor(
      private route: ActivatedRoute, 
        private router: Router, 
          private userService: UserService) {
    }
   
    onSubmit() {
    }
   
    gotoUserList() {
      this.router.navigate(['/users']);
    }
}