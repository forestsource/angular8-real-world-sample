import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { AppRoutingModule }     from './app-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';


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
    MatCardModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MoviesComponent,
    MovieComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
