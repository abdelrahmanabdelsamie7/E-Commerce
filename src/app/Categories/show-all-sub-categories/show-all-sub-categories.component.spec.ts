import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllSubCategoriesComponent } from './show-all-sub-categories.component';

describe('ShowAllSubCategoriesComponent', () => {
  let component: ShowAllSubCategoriesComponent;
  let fixture: ComponentFixture<ShowAllSubCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllSubCategoriesComponent]
    });
    fixture = TestBed.createComponent(ShowAllSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
