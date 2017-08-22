import { AbstractControl, FormControl } from '@angular/forms';
 
export function EmailValidator(control : AbstractControl){
    let EMAIL_REGEX = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/;
    if(!EMAIL_REGEX.test(control.value)){

        return { invalidEmail : true }
    }

    return null;
}
