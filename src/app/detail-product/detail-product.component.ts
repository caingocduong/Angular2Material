import { Component } from '@angular/core';
import {RatingModule} from 'ngx-rating';

@Component({
    selector : 'detail-product',
    templateUrl : './detail-product.component.html',
    styleUrls : [ './detail-product.component.sass' ]
})

export class DetailProductComponent {
    public colors = [
        { value : 'black', viewValue : 'Black' },
        { value : 'silver', viewValue : 'Silver' },
        { value : 'dark-black', viewValue : 'Dark Black' }
    ];

    public sizes = [
        { value : 'large', viewValue : 'Large' },
        { value : 'medium', viewValue : 'Medium' },
        { value : 'small', viewValue : 'Small' }
    ];

    public quantity = [
        { value : '1', viewValue : '1' },
        { value : '2', viewValue : '2' },
        { value : '3', viewValue : '3' },
        { value : '4', viewValue : '4' },
        { value : '5', viewValue : '5' }
    ];

    public categories = [
        { value : 'mobile', viewValue : 'Mobile Phones' },
        { value : 'desktop', viewValue : 'Desktop' },
        { value : 'laptop', viewValue : 'Laptop' },
        { value : 'accessories', viewValue : 'Accessories' },
        { value : 'software', viewValue : 'Software' },
        { value : 'sportNfitness', viewValue : 'Sport & Fitness' },
        { value : 'footwear', viewValue : 'Footwear' },
        { value : 'jewellery', viewValue : 'Jewellery' },
        { value : 'clothing', viewValue : 'Clothing' },
        { value : 'homeNkitchen', viewValue : 'Home Decor & Kitchen' },
        { value : 'beautyNhealthcare', viewValue : 'Beauty & Healthcare' },
        { value : 'toy', viewValue : 'Toys, Kids & Babies' },
    ];

    public reasons = [
        'More convenient shipping and delivery',
        'Lower price',
        'Bigger choice',
        'Payments security',
        '30-day Money Back Guarantee',
        'Other.'
    ];

    private maxRateValue:number = 5;
    private currentRate:number = 0;
    private isRatingReadonly:boolean = false;
    private overStar:number;
    private ratingPercent:number;

    private resetRatingStar() {
        this.overStar = null;
    }

    private overStarDoSomething(value:number):void {
        this.overStar = value;
        this.ratingPercent = 100 * (value / this.maxRateValue);
    };
}
