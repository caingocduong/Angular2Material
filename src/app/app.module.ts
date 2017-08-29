import { RatingModule } from 'ngx-rating';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterFragmentComponent } from './fragments/footer-fragment.component';
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
import { HeaderFragmentComponent } from './fragments/header-fragment.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    Register,
    EqualPasswordValidator,
    HeaderFragmentComponent,
    FooterFragmentComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularSvgIconModule,
    RatingModule,
    NgxPaginationModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
