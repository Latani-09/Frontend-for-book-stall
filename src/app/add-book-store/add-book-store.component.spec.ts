import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookStoreComponent } from './add-book-store.component';

describe('AddBookStoreComponent', () => {
  let component: AddBookStoreComponent;
  let fixture: ComponentFixture<AddBookStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookStoreComponent]
    });
    fixture = TestBed.createComponent(AddBookStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
