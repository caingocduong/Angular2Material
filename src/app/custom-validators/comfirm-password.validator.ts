import { Directive, Attribute, forwardRef } from '@angular/core';
import { Validators, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({ 
    selector: '[validateEqual][formControlName], [validateEqual][formControl]',
    providers : [
        { provide : NG_VALIDATORS, useExisting : forwardRef(()=>EqualPasswordValidator), multi : true }
    ] 
})
export class EqualPasswordValidator implements Validators {
    constructor(
        @Attribute('validateEqual') public validateEqual : string,
        @Attribute('reverse') public reverse : string
    ) {}
    
    private get isReverse(){
        if(!this.reverse) return false;

        return this.reverse === 'true' ? true : false;
    }

    validate(c:AbstractControl) : { [key : string] : any}{
        let v = c.value;

        let e = c.root.get(this.validateEqual);

        if(e && v !== e.value ){

            return {
                validateEqual : false,
            }
        }

        if(e && v === e.value && this.reverse){
            delete e.errors['validateEqual'];
            if(!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }

        if(e && v !== e.value && this.reverse){
            e.setErrors({ validateEqual : false });
        }

        return null
    }
}