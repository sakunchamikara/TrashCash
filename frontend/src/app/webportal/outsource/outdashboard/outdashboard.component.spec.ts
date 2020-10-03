import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdashboardComponent } from './outdashboard.component';

describe('OutdashboardComponent', () => {
  let component: OutdashboardComponent;
  let fixture: ComponentFixture<OutdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
