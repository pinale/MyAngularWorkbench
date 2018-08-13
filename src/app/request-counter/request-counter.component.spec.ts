import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCounterComponent } from './request-counter.component';

describe('RequestCounterComponent', () => {
  let component: RequestCounterComponent;
  let fixture: ComponentFixture<RequestCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
