import { AuthenticationService } from './../services/authentication.service';
import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  /*progress = 30;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];*/
  spaceScreens: Array<any>;

  constructor(private http : Http,private authenticationService:AuthenticationService){
    this.http.get('assets/data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);
  }

  ngOnInit(){
    this.authenticationService.checkCredentials();
  }

  logout(){
      this.authenticationService.logout();
  }

  likeMe(i) {
    if(this.spaceScreens[i].liked == 0){
      this.spaceScreens[i].liked = 1;
    } else {
      this.spaceScreens[i].liked = 0;
    }
  }

  deleteMe(i) {
    this.spaceScreens.splice(i,1);
  }

  goToTop(){
    window.scrollTo(0,0);
  }
}
