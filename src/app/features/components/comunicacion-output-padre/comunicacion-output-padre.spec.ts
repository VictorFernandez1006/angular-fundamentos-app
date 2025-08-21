import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionOutputPadre } from './comunicacion-output-padre';

describe('ComunicacionOutputPadre', () => {
  let component: ComunicacionOutputPadre;
  let fixture: ComponentFixture<ComunicacionOutputPadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicacionOutputPadre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacionOutputPadre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
