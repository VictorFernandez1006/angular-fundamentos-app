import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputCombinado } from './input-output-combinado';

describe('InputOutputCombinado', () => {
  let component: InputOutputCombinado;
  let fixture: ComponentFixture<InputOutputCombinado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputCombinado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputCombinado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
