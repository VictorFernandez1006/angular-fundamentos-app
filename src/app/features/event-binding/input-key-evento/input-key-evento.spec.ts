import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputKeyEvento } from './input-key-evento';

describe('InputKeyEvento', () => {
  let component: InputKeyEvento;
  let fixture: ComponentFixture<InputKeyEvento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputKeyEvento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputKeyEvento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
