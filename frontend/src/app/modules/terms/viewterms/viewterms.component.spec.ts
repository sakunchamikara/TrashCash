import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtermsComponent } from './viewterms.component';

describe('ViewtermsComponent', () => {
  let component: ViewtermsComponent;
  let fixture: ComponentFixture<ViewtermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
