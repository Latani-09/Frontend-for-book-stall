import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fileuploadComponent } from './file-upload.component';

describe('fileuploadComponent', () => {
  let component: fileuploadComponent;
  let fixture: ComponentFixture<fileuploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [fileuploadComponent]
    });
    fixture = TestBed.createComponent(fileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
