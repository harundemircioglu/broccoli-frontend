import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTS

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UserPostComponent } from './profile/user-post/user-post.component';
import { WeightTrackingComponent } from './profile/weight-tracking/weight-tracking.component';
import { FavoriteSuggestionComponent } from './profile/favorite-suggestion/favorite-suggestion.component';
import { FavoriteRecommendedPostComponent } from './profile/favorite-recommended-post/favorite-recommended-post.component';
import { FavoritePostComponent } from './profile/favorite-post/favorite-post.component';
import { EditCategoryComponent } from './admin/dashboard/edit-category/edit-category.component';
import { EditPostComponent } from './admin/dashboard/edit-post/edit-post.component';
import { EditRecommendedPostComponent } from './admin/dashboard/edit-recommended-post/edit-recommended-post.component';
import { EditSuggestionComponent } from './admin/dashboard/edit-suggestion/edit-suggestion.component';
import { EditUserComponent } from './admin/dashboard/edit-user/edit-user.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //Kullanıcının login sayfasu
  { path: 'login', component: LoginComponent },
  //Kullanıcının login sayfasu
  { path: 'register', component: RegisterComponent },
  //Kullanıcının profil sayfası
  { path: 'profile', component: ProfileComponent },
  //Kullanıcının post oluşturma sayfası
  { path: 'new-post', component: NewPostComponent },
  //Kullanıcının post detay sayfası
  { path: 'post-details', component: UserPostComponent },
  //Kullanıcının post sayfası
  { path: 'profile/my-posts/:userId', component: UserPostComponent },
  //Kullanıcının favori önerilenler sayfası
  { path: 'profile/my-favorite-recommended-posts/:userId', component: FavoriteRecommendedPostComponent },
  //Kullanıcının favori post sayfası
  { path: 'profile/my-favorite-posts/:userId', component: FavoritePostComponent },
  //Kullanıcının favori öneri sayfası
  { path: 'profile/my-favorite-suggestions/:userId', component: FavoriteSuggestionComponent },
  //Kullanıcının kilo takip sayfası
  { path: 'profile/my-weight-trackings/:userId', component: WeightTrackingComponent },

  //ADMIN SECTION

  //Admin home sayfası
  { path: 'admin/dashboard', component: DashboardComponent },
  //Admin kullanıcı düzenleme sayfası
  { path: 'admin/edit-user', component: EditUserComponent },
  //Admin kategori düzenleme sayfası
  { path: 'admin/edit-category', component: EditCategoryComponent },
  //Admin post düzenleme sayfası
  { path: 'admin/edit-post', component: EditPostComponent },
  //Admin önerilen post düzenleme sayfası
  { path: 'admin/edit-recommended-post', component: EditRecommendedPostComponent },
  //Admin öneri düzenleme sayfası
  { path: 'admin/edit-suggestion', component: EditSuggestionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
