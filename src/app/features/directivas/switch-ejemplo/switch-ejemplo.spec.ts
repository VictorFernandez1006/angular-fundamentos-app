import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchEjemplo } from './switch-ejemplo';

describe('SwitchEjemplo', () => {
  let component: SwitchEjemplo;
  let fixture: ComponentFixture<SwitchEjemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchEjemplo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchEjemplo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
