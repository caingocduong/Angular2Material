import {MdMenuTrigger} from '@angular2-material/menu';
import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector : 'app-welcome-page',
    templateUrl : './welcome.component.html',
    styleUrls : [ './welcome.component.sass' ]
})

export class WelcomeComponent {
    @ViewChild(MdMenuTrigger) trigger : MdMenuTrigger;
    public selectOption;
    public sortBy = [
        { value : 'lowest', viewValue : 'Lowest Price' },
        { value : 'highest', viewValue : 'Highest Price' },
        { value : 'sale', viewValue : 'On Sale' },
        { value : 'inStock', viewValue : 'In Stock' }
    ];

    public feature_products : Array<any>;
    public new_products : Array<any>;

    constructor(private http: Http){
        this.selectOption = "EN";

        this.http.get('assets/feature-products-data.json')
                .map(response => response.json().feature_product_list)
                .subscribe(res => this.feature_products = res);
        
        this.http.get('assets/new-products-data.json')
                .map(response => response.json().new_product_list)
                .subscribe(res => this.new_products = res);
    }

    openMenu(){
        this.trigger.openMenu();
    }
}