import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDbComponent } from './view-db.component';

describe('ViewDbComponent', () => {
  let component: ViewDbComponent;
  let fixture: ComponentFixture<ViewDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
