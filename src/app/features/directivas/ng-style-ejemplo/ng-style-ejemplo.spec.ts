import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleEjemplo } from './ng-style-ejemplo';

describe('NgStyleEjemplo', () => {
  let component: NgStyleEjemplo;
  let fixture: ComponentFixture<NgStyleEjemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStyleEjemplo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStyleEjemplo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
