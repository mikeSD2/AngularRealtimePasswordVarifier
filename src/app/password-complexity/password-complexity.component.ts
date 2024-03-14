import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { VareficationLogicService} from '../services/varefication-logic.service';

@Component({
  selector: 'app-password-complexity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-complexity.component.html',
  styleUrl: './password-complexity.component.css'
})
export class PasswordComplexityComponent {
  constructor(private vareficationLogicService: VareficationLogicService) {}
  //вызываем метод сервиса
  getPromoStyles(sectionNumber: number) {
    return this.vareficationLogicService.getPromoStyles(sectionNumber);
  }
}