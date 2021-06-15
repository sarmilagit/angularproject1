import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaycallComponent } from './todaycall.component';

describe('TodaycallComponent', () => {
  let component: TodaycallComponent;
  let fixture: ComponentFixture<TodaycallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaycallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaycallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
