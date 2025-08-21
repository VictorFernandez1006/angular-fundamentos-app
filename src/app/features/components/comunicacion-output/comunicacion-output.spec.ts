import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionOutput } from './comunicacion-output';

describe('ComunicacionOutput', () => {
  let component: ComunicacionOutput;
  let fixture: ComponentFixture<ComunicacionOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicacionOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacionOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
