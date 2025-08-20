import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasPage } from './directivas-page';

describe('DirectivasPage', () => {
  let component: DirectivasPage;
  let fixture: ComponentFixture<DirectivasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
