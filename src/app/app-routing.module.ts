import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  //Kullanıcının login sayfasu
  { path: 'login', component: LoginComponent },
  //Kullanıcının profil sayfası
  { path: 'profile', component: ProfileComponent },
  //Kullanıcının post oluşturma sayfası
  { path: 'profile/my-posts', component: UserPostComponent },
  //Kullanıcının favori postlarının sayfası
  { path: 'profile/my-favorite-post', component: FavoritePostComponent },
  //Kullanıcının kilo takip sayfası
  { path: 'profile/my-weight-tracking', component: WeightTrackingComponent },
  //Kullanıcının favori öneri sayfası
  { path: 'profile/my-favorite-suggestion', component: FavoriteSuggestionComponent },
  //Kullanıcının favori önerilenler sayfası
  { path: 'profile/my-favorite-recommended-post', component: FavoriteRecommendedPostComponent },

  //ADMIN SECTION

  //Admin home sayfası
  { path: 'admin/dashboard', component: DashboardComponent },
  //Admin kategori düzenleme sayfası
  { path: 'admin/edit-category', component: EditCategoryComponent },
  //Admin post düzenleme sayfası
  { path: 'admin/edit-post', component: EditPostComponent },
  //Admin önerilen post düzenleme sayfası
  { path: 'admin/edit-recommended-post', component: EditRecommendedPostComponent },
  //Admin öneri düzenleme sayfası
  { path: 'admin/edit-suggestion', component: EditSuggestionComponent },
  //Admin kullanıcı düzenleme sayfası
  { path: 'admin/edit-user', component: EditUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
