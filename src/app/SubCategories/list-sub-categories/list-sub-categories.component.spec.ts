import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubCategoriesComponent } from './list-sub-categories.component';

describe('ListSubCategoriesComponent', () => {
  let component: ListSubCategoriesComponent;
  let fixture: ComponentFixture<ListSubCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSubCategoriesComponent]
    });
    fixture = TestBed.createComponent(ListSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
