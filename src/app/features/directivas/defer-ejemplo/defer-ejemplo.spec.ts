import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferEjemplo } from './defer-ejemplo';

describe('DeferEjemplo', () => {
  let component: DeferEjemplo;
  let fixture: ComponentFixture<DeferEjemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferEjemplo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferEjemplo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
