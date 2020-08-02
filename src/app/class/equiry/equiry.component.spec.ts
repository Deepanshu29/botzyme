import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiryComponent } from './equiry.component';

describe('EquiryComponent', () => {
  let component: EquiryComponent;
  let fixture: ComponentFixture<EquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
