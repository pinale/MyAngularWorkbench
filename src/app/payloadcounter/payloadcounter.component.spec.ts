import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadcounterComponent } from './payloadcounter.component';

describe('PayloadcounterComponent', () => {
  let component: PayloadcounterComponent;
  let fixture: ComponentFixture<PayloadcounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayloadcounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayloadcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
