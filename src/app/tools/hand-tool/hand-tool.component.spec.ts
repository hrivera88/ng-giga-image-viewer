import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandToolComponent } from './hand-tool.component';

describe('HandToolComponent', () => {
  let component: HandToolComponent;
  let fixture: ComponentFixture<HandToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandToolComponent]
    });
    fixture = TestBed.createComponent(HandToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
