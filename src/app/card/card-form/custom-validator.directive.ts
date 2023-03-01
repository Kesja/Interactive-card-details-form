import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customValidation(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const errorObject = {};

    const NUMERIC_REGEXP = /^[\d- ]*$/;
    const BLANK_REGEXP = /^.+/;
    //Fake card length validation, accepting 16 numbers, but not considering visa or mastercard numbers sets
    const VALID_NUMBER_REGEXP = /^(?:[- ]*\d){16}$/;

    if (NUMERIC_REGEXP.test(control.value)) {
    } else {
      errorObject['onlyNumbers'] = true;
    }
    if (BLANK_REGEXP.test(control.value)) {
    } else {
      errorObject['isBlank'] = true;
    }
    if (VALID_NUMBER_REGEXP.test(control.value)) {
    } else {
      errorObject['invalidNumber'] = true;
    }

    return errorObject;
  };
}
