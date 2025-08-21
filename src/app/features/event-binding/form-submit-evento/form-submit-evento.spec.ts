import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmitEvento } from './form-submit-evento';

describe('FormSubmitEvento', () => {
  let component: FormSubmitEvento;
  let fixture: ComponentFixture<FormSubmitEvento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSubmitEvento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSubmitEvento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
