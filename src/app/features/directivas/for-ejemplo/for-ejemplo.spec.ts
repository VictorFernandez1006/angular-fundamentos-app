import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEjemplo } from './for-ejemplo';

describe('ForEjemplo', () => {
  let component: ForEjemplo;
  let fixture: ComponentFixture<ForEjemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForEjemplo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForEjemplo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
