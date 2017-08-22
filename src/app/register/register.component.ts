import { EmailValidator } from './../custom-validators/email.validator';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from '../models/UserInfo';

@Component({
    selector : 'app-register',
    templateUrl : './register.component.html',
    styleUrls : ['./register.component.css']
})

export class Register implements OnInit{
    userInfo : FormGroup;
    constructor(){}

    ngOnInit(){
        this.userInfo = new FormGroup({
            email : new FormControl('', [Validators.required, EmailValidator]),
            username : new FormControl('', Validators.required),
            password : new FormControl('', [ Validators.required]),
            confirmPassword : new FormControl('', [Validators.required])
        });
    }

    onSubmit(model : UserInfo, isValid : Boolean){
        console.log(model, isValid);
    }
}
