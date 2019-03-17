import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { NavimenuComponent } from './navimenu/navimenu.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';

// @ts-ignore
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MoviesComponent,
    MovieComponent,
    NavimenuComponent,
    SearchComponent,
    ProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
