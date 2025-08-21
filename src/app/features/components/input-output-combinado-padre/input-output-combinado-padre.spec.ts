import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputCombinadoPadre } from './input-output-combinado-padre';

describe('InputOutputCombinadoPadre', () => {
  let component: InputOutputCombinadoPadre;
  let fixture: ComponentFixture<InputOutputCombinadoPadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputCombinadoPadre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputCombinadoPadre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
