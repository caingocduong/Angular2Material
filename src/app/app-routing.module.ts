import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes : Routes = [
    { path : '', redirectTo : '/welcome', pathMatch : 'full' },
    { path : 'home', component : HomeComponent },
    { path : 'login', component : LoginComponent },
    { path : 'welcome', component : WelcomeComponent },
    { path : 'product-detail', component : DetailProductComponent }
 
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})

export class AppRoutingModule{}