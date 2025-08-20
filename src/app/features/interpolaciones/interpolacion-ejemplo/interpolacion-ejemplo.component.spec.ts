import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacionEjemploComponent } from './interpolacion-ejemplo.component';

describe('InterpolacionEjemploComponent', () => {
  let component: InterpolacionEjemploComponent;
  let fixture: ComponentFixture<InterpolacionEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolacionEjemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolacionEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
