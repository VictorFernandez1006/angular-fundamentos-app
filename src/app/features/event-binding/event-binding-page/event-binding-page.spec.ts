import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingPage } from './event-binding-page';

describe('EventBindingPage', () => {
  let component: EventBindingPage;
  let fixture: ComponentFixture<EventBindingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
