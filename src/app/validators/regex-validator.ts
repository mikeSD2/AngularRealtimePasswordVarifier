import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
//валидатор вынесен в отдельный класс
export class RegexValidator {
    static regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          if (!control.value) {
            return null!;
          }
          const valid = regex.test(control.value);
          return valid ? null! : error;
        };
    }
}
