import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorEvento } from './contador-evento';

describe('ContadorEvento', () => {
  let component: ContadorEvento;
  let fixture: ComponentFixture<ContadorEvento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorEvento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorEvento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
