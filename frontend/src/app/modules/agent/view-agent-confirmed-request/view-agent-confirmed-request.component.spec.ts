import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAgentConfirmedRequestComponent } from './view-agent-confirmed-request.component';

describe('ViewAgentConfirmedRequestComponent', () => {
  let component: ViewAgentConfirmedRequestComponent;
  let fixture: ComponentFixture<ViewAgentConfirmedRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAgentConfirmedRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAgentConfirmedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
