import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegexValidator } from '../validators/regex-validator';
import { VareficationLogicService } from '../services/varefication-logic.service';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from "../custom-controls/custom-input/custom-input.component";
import { RegExps } from '../classes/reg-exps';

@Component({
    selector: 'app-password-input',
    standalone: true,
    templateUrl: './password-form.component.html',
    styleUrl: './password-form.component.css',
    imports: [CommonModule, ReactiveFormsModule, CustomInputComponent]
})
export class PasswordInputComponent {
  checkoutFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private vareficationLogicService: VareficationLogicService) {}
  ngOnInit(): void {
    // Далее описываем нашу форму.
    this.checkoutFormGroup = this.formBuilder.group({
      credentials: this.formBuilder.group({
        password: new FormControl('', [
          Validators.required, 
          Validators.minLength(2), 
          //регулярки вынесли в отдельный файл для удобства
          RegexValidator.regexValidator(RegExps.isPasswordWeak, {
            isPasswordWeak: true,
          }),
          RegexValidator.regexValidator(RegExps.isPasswordMid, {
            isPasswordMid: true,
          }),
        ]),
      }),
    });
    this.vareficationLogicService.setPassword(this.checkoutFormGroup.get('credentials.password')!);
  }
}

