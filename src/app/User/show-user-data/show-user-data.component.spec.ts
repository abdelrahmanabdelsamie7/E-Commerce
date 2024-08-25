import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserDataComponent } from './show-user-data.component';

describe('ShowUserDataComponent', () => {
  let component: ShowUserDataComponent;
  let fixture: ComponentFixture<ShowUserDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowUserDataComponent]
    });
    fixture = TestBed.createComponent(ShowUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
