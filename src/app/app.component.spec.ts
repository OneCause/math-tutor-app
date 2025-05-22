/// <reference types="jasmine" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CalculatorService } from './services/calculator-service/calculator.service';
import { MessageService } from './services/message-service/message.service';

// ✅ Mocks
const mockCalculatorService = {
  generateNumber: jasmine.createSpy('generateNumber').and.returnValue(3),
  checkAnswer: jasmine.createSpy('checkAnswer').and.returnValue(true)
};

const mockMessageService = {
  showSuccess: jasmine.createSpy('showSuccess'),
  showError: jasmine.createSpy('showError')
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule],
      providers: [
        { provide: CalculatorService, useValue: mockCalculatorService },
        { provide: MessageService, useValue: mockMessageService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
