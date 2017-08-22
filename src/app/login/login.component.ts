import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css'],
    providers : [ AuthenticationService ] 
})

export class LoginComponent {
    public user = new User('','');
    public errorMessage = '';
    public hasError = false;

    constructor(
        private authenticationService : AuthenticationService
    ){}

    login(){
        if(!this.authenticationService.login(this.user)){
            this.errorMessage = 'Email or password is not correct!';
            this.hasError = true;
            setTimeout(() => {
                this.hasError = false;
            }, 3000);
        }
    }

}