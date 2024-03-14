import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordComplexityComponent } from './password-complexity.component';

describe('PasswordComplexityComponent', () => {
  let component: PasswordComplexityComponent;
  let fixture: ComponentFixture<PasswordComplexityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordComplexityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordComplexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
