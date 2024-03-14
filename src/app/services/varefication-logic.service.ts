import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { StyleToSet } from '../classes/style-to-set';

@Injectable({
  providedIn: 'root'
})
export class VareficationLogicService {

  password!: AbstractControl<any,any>|null;

  constructor() { }
  getPromoStyles(sectionNumber: number) {
    //Вынес изначальные стили в отдельный файл
    var styleToSet:any = new StyleToSet()
    //оптимизировал насколько смог
    if(this.password!.errors?.['minlength'])
      styleToSet.background = '#f50505';
    else if(this.password!.hasError('isPasswordWeak')) {
      if(sectionNumber==1){
        styleToSet.background = '#f50505';}
    }
    else if(this.password!.hasError('isPasswordMid')) {
      styleToSet.background = '#fff419';
      if(sectionNumber==3){
        styleToSet.background = '#c1c9c9';}
    }
    else if(!this.password!.errors?.['required'])
      styleToSet.background = '#1dff19';
    return styleToSet;
  }
  setPassword(password: AbstractControl<any,any>|null) {
    this.password = password;
  }
}
