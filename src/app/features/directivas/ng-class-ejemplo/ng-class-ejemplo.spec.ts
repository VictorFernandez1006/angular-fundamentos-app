import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassEjemplo } from './ng-class-ejemplo';

describe('NgClassEjemplo', () => {
  let component: NgClassEjemplo;
  let fixture: ComponentFixture<NgClassEjemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassEjemplo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassEjemplo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
