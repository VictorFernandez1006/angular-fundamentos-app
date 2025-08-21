import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionInput } from './comunicacion-input';

describe('ComunicacionInput', () => {
  let component: ComunicacionInput;
  let fixture: ComponentFixture<ComunicacionInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicacionInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacionInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
