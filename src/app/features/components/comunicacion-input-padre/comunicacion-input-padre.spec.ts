import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionInputPadre } from './comunicacion-input-padre';

describe('ComunicacionInputPadre', () => {
  let component: ComunicacionInputPadre;
  let fixture: ComponentFixture<ComunicacionInputPadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicacionInputPadre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacionInputPadre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
