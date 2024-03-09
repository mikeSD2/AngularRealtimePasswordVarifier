import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
  ValidationErrors,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './password-validation.component.css',
  standalone: true,
})
export class PasswordValidationComponent implements OnInit {
  checkoutFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null!;
      }
      const valid = regex.test(control.value);
      return valid ? null! : error;
    };
  }

  ngOnInit(): void {
    // Далее описываем нашу форму.
    this.checkoutFormGroup = this.formBuilder.group({
      credentials: this.formBuilder.group({
        password: new FormControl('', [
          Validators.required, 
          Validators.minLength(2), 
          this.regexValidator(new RegExp('(?=.*[a-zA-Z0-9])(?=.*[!-\/:-@[-`{-~0-9])(?=.*[!-\/:-@[-`{-~a-zA-Z])'), {
            containsNumbers: true,
          }),
          this.regexValidator(new RegExp('(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!-\/:-@[-`{-~])'), {
            containsLetters: true,
          }),
        ]),
      }),
    });
  }
  get password() { return this.checkoutFormGroup.get('credentials.password');}

  getPromoStyles(sectionNumber: number) {
    var styleToSet:any = {
      borderRadius: '20px',
      height: '20px',
      width: '20px',
      float: 'left'
    }
    if(this.password?.errors?.['required']) {
      styleToSet.background = '#c1c9c9';
      return styleToSet;
    }
    else if(this.password?.errors?.['minlength']) {
      styleToSet.background = '#f50505';
      return styleToSet;
    }
    styleToSet.background = '#c1c9c9';
    if(this.password!.hasError('containsNumbers')){
      if(sectionNumber==1)
        styleToSet.background = '#f50505';
      return styleToSet;
    }
    else if(this.password!.hasError('containsLetters')){
      if(sectionNumber==1)
        styleToSet.background = '#fff419';
      else if(sectionNumber==2)
        styleToSet.background = '#fff419';
      return styleToSet;
    }
    styleToSet.background = '#1dff19';
    return styleToSet;
  }

  onSubmit() {console.log("ewfefwe")}

}
