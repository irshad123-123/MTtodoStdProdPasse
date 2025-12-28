import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDashComponent } from './pass-dash.component';

describe('PassDashComponent', () => {
  let component: PassDashComponent;
  let fixture: ComponentFixture<PassDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
