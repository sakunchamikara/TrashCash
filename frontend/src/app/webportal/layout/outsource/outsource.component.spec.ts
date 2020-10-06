import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourceComponent } from './outsource.component';

describe('OutsourceComponent', () => {
  let component: OutsourceComponent;
  let fixture: ComponentFixture<OutsourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
