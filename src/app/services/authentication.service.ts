import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

var users : User[] = [
    new User('admin@gmail.com','admin123'),
    new User('user@gmail.com','user123')
];

@Injectable()
export class AuthenticationService{
    constructor(private router:Router){}

    login(user){
       var authenticatedUser = users.find(u => u.email === user.email && u.password === user.password);
       if(authenticatedUser){
           localStorage.setItem("user", authenticatedUser.email);
           this.router.navigate(['/home']);

           return true;
       }

       return false;
    }

    logout(){
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }

    checkCredentials(){
        if(localStorage.getItem("user") === null){
            this.router.navigate(['/login']);
        }
    }
}