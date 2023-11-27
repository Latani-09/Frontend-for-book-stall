import { ComponentFixture, TestBed } from '@angular/core/testing';

import { edituserComponent } from './edit-user.component';

describe('EditUserComponent', () => {
  let component: edituserComponent;
  let fixture: ComponentFixture<edituserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [edituserComponent]
    });
    fixture = TestBed.createComponent(edituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
