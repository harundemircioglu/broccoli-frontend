import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSuggestionComponent } from './edit-suggestion.component';

describe('EditSuggestionComponent', () => {
  let component: EditSuggestionComponent;
  let fixture: ComponentFixture<EditSuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSuggestionComponent]
    });
    fixture = TestBed.createComponent(EditSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
