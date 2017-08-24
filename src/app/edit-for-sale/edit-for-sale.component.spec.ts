import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditForSaleComponent } from './edit-for-sale.component';

describe('EditForSaleComponent', () => {
  let component: EditForSaleComponent;
  let fixture: ComponentFixture<EditForSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditForSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
