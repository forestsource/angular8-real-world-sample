// Modules
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieComponent } from './movie/movie.component';
import { MovieImageComponent } from './movie-image/movie-image.component';
import { MovieMessageComponent } from './movie-message/movie-message.component';
import { MoviesComponent } from './movies/movies.component';
import { NavimenuComponent } from './navimenu/navimenu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

// Guards
import { AuthGuard } from './guard/auth.guard';

// Services
import { CookieService } from 'ngx-cookie-service';
import { MainTitleComponent } from './main-title/main-title.component';

// @ts-ignore
@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminComponent,
    AppComponent,
    DashboardComponent,
    MovieComponent,
    MovieImageComponent,
    MovieMessageComponent,
    MoviesComponent,
    NavimenuComponent,
    NotFoundComponent,
    ProfileComponent,
    SearchComponent,
    MainTitleComponent,
  ],
  providers: [
    AuthGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
