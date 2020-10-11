import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportsComponent } from './generate-reports.component';

describe('GenerateReportsComponent', () => {
  let component: GenerateReportsComponent;
  let fixture: ComponentFixture<GenerateReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
