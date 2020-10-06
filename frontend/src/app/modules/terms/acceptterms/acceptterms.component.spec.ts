import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccepttermsComponent } from './acceptterms.component';

describe('AccepttermsComponent', () => {
  let component: AccepttermsComponent;
  let fixture: ComponentFixture<AccepttermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccepttermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccepttermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
