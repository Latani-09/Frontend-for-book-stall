import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ratebookComponent } from './ratebook.component';

describe('AddbookComponent', () => {
  let component: ratebookComponent;
  let fixture: ComponentFixture<ratebookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ratebookComponent]
    });
    fixture = TestBed.createComponent(ratebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
