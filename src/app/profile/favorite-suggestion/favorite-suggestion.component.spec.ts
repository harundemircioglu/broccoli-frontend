import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSuggestionComponent } from './favorite-suggestion.component';

describe('FavoriteSuggestionComponent', () => {
  let component: FavoriteSuggestionComponent;
  let fixture: ComponentFixture<FavoriteSuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteSuggestionComponent]
    });
    fixture = TestBed.createComponent(FavoriteSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
