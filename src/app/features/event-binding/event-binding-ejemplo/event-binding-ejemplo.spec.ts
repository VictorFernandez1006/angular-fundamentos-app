import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingEjemplo } from './event-binding-ejemplo';

describe('EventBindingEjemplo', () => {
  let component: EventBindingEjemplo;
  let fixture: ComponentFixture<EventBindingEjemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindingEjemplo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingEjemplo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
