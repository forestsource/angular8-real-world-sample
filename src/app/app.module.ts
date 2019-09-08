// Modules
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLabelModule } from '@angular/material/label';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { MovieImageComponent } from './movie-image/movie-image.component';
import { MovieMessageComponent } from './movie-message/movie-message.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { NavimenuComponent } from './navimenu/navimenu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

// Services
import { CookieService } from 'ngx-cookie-service';

// Others
import { AuthGuard } from './guard/auth.guard';
import { httpInterceptorProviders } from './http-interceptor/http-interceptor-manager';

// load Translate json
// TODO: Group Application Initialize.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    MatLabelModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
    TranslateModule,
    // TODO: Move somewhere nice.
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
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
    MainTitleComponent
  ],
  providers: [
    AuthGuard,
    CookieService,
    httpInterceptorProviders,
    TranslatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
