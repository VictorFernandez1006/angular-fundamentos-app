import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacionPageComponent } from './interpolacion-page.component';

describe('InterpolacionPageComponent', () => {
  let component: InterpolacionPageComponent;
  let fixture: ComponentFixture<InterpolacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolacionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
