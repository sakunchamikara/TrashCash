import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermdiscripComponent } from './termdiscrip.component';

describe('TermdiscripComponent', () => {
  let component: TermdiscripComponent;
  let fixture: ComponentFixture<TermdiscripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermdiscripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermdiscripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
