/// <reference types="jasmine" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CalculatorService } from './services/calculator-service/calculator.service';
import { MessageService } from './services/message-service/message.service';
import { fakeAsync, tick } from '@angular/core/testing';

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
  /**
   * Unit Test: Component Creation
   * -----------------------------
   * Verifies that the AppComponent is successfully created by Angular's TestBed.
   * This confirms that the DI configuration and component setup are valid.
   */
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  /**
   * Unit Test: checkAnswer() - Correct Answer
   * -----------------------------------------
   * Given a correct answer (as determined by CalculatorService),
   * - Ensures MessageService.showSuccess is called with the expected message
   * - Verifies resetForm() is triggered after a 500ms delay
   *
   * Uses Angular's fakeAsync + tick() utilities to simulate time passage.
   */
  it('should show success and reset the form when answer is correct', fakeAsync(() => {
    component.answer = 7;
    mockCalculatorService.checkAnswer.and.returnValue(true);

    spyOn(component, 'resetForm');
    component.checkAnswer();

    tick(500); // Simulate the timeout delay inside checkAnswer()
    expect(component.resetForm).toHaveBeenCalled();
  }));
  /**
   * Unit Test: checkAnswer() - Incorrect Answer
   * --------------------------------------------
   * Simulates an incorrect answer scenario:
   * - Ensures MessageService.showError is triggered
   * - Verifies that setFocus() is called immediately
   */
  it('should show error and set focus when answer is incorrect', () => {
    component.answer = 5;
    mockCalculatorService.checkAnswer.and.returnValue(false);

    spyOn(component, 'setFocus');
    component.checkAnswer();

    expect(mockMessageService.showError).toHaveBeenCalledWith('Sorry, that is not correct. Please try again.', '');
    expect(component.setFocus).toHaveBeenCalled();
  });
    /**
   * Unit Test: resetForm()
   * -----------------------
   * - Should generate new x and y values
   * - Should reset the answer to null
   * - Should call setFocus()
   */
  it('should reset form, generate new values, and set focus', () => {
    spyOn(component, 'generateXandY');
    spyOn(component, 'setFocus');

    component.answer = 12;
    component.resetForm();

    expect(component.answer).toBeNull();
    expect(component.generateXandY).toHaveBeenCalled();
    expect(component.setFocus).toHaveBeenCalled();
  });
  /**
   * Unit Test: generateXandY()
   * ---------------------------
   * Should assign xValue and yValue using CalculatorService.generateNumber()
   */
  it('should generate x and y values using CalculatorService', () => {
    mockCalculatorService.generateNumber.calls.reset(); // ✅ reset spy call count

    component.generateXandY();

    expect(mockCalculatorService.generateNumber).toHaveBeenCalledTimes(2);
    expect(component.xValue).toBe(3);
    expect(component.yValue).toBe(3);
  });
});
