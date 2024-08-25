import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllOrdersComponent } from './list-all-orders.component';

describe('ListAllOrdersComponent', () => {
  let component: ListAllOrdersComponent;
  let fixture: ComponentFixture<ListAllOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllOrdersComponent]
    });
    fixture = TestBed.createComponent(ListAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
