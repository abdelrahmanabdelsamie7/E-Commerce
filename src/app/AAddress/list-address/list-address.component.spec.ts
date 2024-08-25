import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddressComponent } from './list-address.component';

describe('ListAddressComponent', () => {
  let component: ListAddressComponent;
  let fixture: ComponentFixture<ListAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAddressComponent]
    });
    fixture = TestBed.createComponent(ListAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
