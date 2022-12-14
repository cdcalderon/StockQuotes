import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsDashboardComponent } from './signals-dashboard.component';

describe('SignalsDashboardComponent', () => {
  let component: SignalsDashboardComponent;
  let fixture: ComponentFixture<SignalsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
