import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChangeEvento } from './select-change-evento';

describe('SelectChangeEvento', () => {
  let component: SelectChangeEvento;
  let fixture: ComponentFixture<SelectChangeEvento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectChangeEvento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectChangeEvento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
