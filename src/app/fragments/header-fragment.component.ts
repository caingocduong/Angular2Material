import { Component} from '@angular/core';

@Component({
    selector: 'header-fragment',
    templateUrl: './header-fragment.component.html',
    styleUrls: [ './header-fragment.component.sass' ] 
})

export class HeaderFragmentComponent {
    public selectOption;
    constructor() {
        this.selectOption = "EN";
     }

}