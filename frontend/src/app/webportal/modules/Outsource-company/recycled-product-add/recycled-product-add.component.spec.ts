import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycledProductAddComponent } from './recycled-product-add.component';

describe('RecycledProductAddComponent', () => {
  let component: RecycledProductAddComponent;
  let fixture: ComponentFixture<RecycledProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycledProductAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecycledProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
