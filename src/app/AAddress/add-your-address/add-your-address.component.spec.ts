import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYourAddressComponent } from './add-your-address.component';

describe('AddYourAddressComponent', () => {
  let component: AddYourAddressComponent;
  let fixture: ComponentFixture<AddYourAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddYourAddressComponent]
    });
    fixture = TestBed.createComponent(AddYourAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
