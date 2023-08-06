import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecommendedPostComponent } from './edit-recommended-post.component';

describe('EditRecommendedPostComponent', () => {
  let component: EditRecommendedPostComponent;
  let fixture: ComponentFixture<EditRecommendedPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRecommendedPostComponent]
    });
    fixture = TestBed.createComponent(EditRecommendedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
