import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteRecommendedPostComponent } from './favorite-recommended-post.component';

describe('FavoriteRecommendedPostComponent', () => {
  let component: FavoriteRecommendedPostComponent;
  let fixture: ComponentFixture<FavoriteRecommendedPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteRecommendedPostComponent]
    });
    fixture = TestBed.createComponent(FavoriteRecommendedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
