import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubCategoeyComponent } from './show-sub-categoey.component';

describe('ShowSubCategoeyComponent', () => {
  let component: ShowSubCategoeyComponent;
  let fixture: ComponentFixture<ShowSubCategoeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSubCategoeyComponent]
    });
    fixture = TestBed.createComponent(ShowSubCategoeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
