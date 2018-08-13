import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowcounterComponent } from './rowcounter.component';

describe('RowcounterComponent', () => {
  let component: RowcounterComponent;
  let fixture: ComponentFixture<RowcounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowcounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
