import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { EqualPasswordValidator } from './custom-validators/comfirm-password.validator';
import { AuthenticationService } from './services/authentication.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InjectionToken } from '@angular/core';
import 'hammerjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Register } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    Register,
    EqualPasswordValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularSvgIconModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
