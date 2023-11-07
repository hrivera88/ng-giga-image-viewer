import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteVisibilityToolComponent } from './note-visibility-tool.component';

describe('NoteVisibilityToolComponent', () => {
  let component: NoteVisibilityToolComponent;
  let fixture: ComponentFixture<NoteVisibilityToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteVisibilityToolComponent]
    });
    fixture = TestBed.createComponent(NoteVisibilityToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
