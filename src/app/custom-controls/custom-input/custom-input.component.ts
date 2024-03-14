import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
   }]
})
export class CustomInputComponent implements ControlValueAccessor {
 
   onChange(_: any) {}
  
   onInputChange(event: any) {
    this.onChange(event.target.value);
   }
   //реализуем необх методы интерфейса
   //особенно тот который будет передавать данные в форму при какихто событиях
   writeValue(value: any) {}
   registerOnChange(fn:any) {
    this.onChange = fn;
   }
   registerOnTouched() {}
}
