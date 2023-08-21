import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from 'src/core/interceptors/jwt.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// COMPONENTS

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UserPostComponent } from './profile/user-post/user-post.component';
import { FavoritePostComponent } from './profile/favorite-post/favorite-post.component';
import { FavoriteSuggestionComponent } from './profile/favorite-suggestion/favorite-suggestion.component';
import { FavoriteRecommendedPostComponent } from './profile/favorite-recommended-post/favorite-recommended-post.component';
import { EditPostComponent } from './admin/dashboard/edit-post/edit-post.component';
import { EditRecommendedPostComponent } from './admin/dashboard/edit-recommended-post/edit-recommended-post.component';
import { EditSuggestionComponent } from './admin/dashboard/edit-suggestion/edit-suggestion.component';
import { EditUserComponent } from './admin/dashboard/edit-user/edit-user.component';
import { WeightTrackingComponent } from './profile/weight-tracking/weight-tracking.component';
import { EditCategoryComponent } from './admin/dashboard/edit-category/edit-category.component';
import { RegisterComponent } from './register/register.component';
import { FootbarComponent } from './footbar/footbar.component';

//MODULES

import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    NavbarAdminComponent,
    DashboardComponent,
    ProfileComponent,
    UserPostComponent,
    FavoritePostComponent,
    FavoriteSuggestionComponent,
    FavoriteRecommendedPostComponent,
    EditPostComponent,
    EditRecommendedPostComponent,
    EditSuggestionComponent,
    EditUserComponent,
    WeightTrackingComponent,
    EditCategoryComponent,
    RegisterComponent,
    FootbarComponent,
    NewPostComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
