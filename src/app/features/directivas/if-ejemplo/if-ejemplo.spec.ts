import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfEjemplo } from './if-ejemplo';

describe('IfEjemplo', () => {
  let component: IfEjemplo;
  let fixture: ComponentFixture<IfEjemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfEjemplo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfEjemplo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
