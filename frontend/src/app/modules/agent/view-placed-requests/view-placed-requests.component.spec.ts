import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlacedRequestsComponent } from './view-placed-requests.component';

describe('ViewPlacedRequestsComponent', () => {
  let component: ViewPlacedRequestsComponent;
  let fixture: ComponentFixture<ViewPlacedRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlacedRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlacedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
