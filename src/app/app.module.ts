import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectTeamsComponent } from './components/select-teams/select-teams.component';
import { TossComponent } from './components/toss/toss.component';
import { MatchComponent } from './components/match/match.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SingleMatchDetailsComponent } from './components/single-match-details/single-match-details.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SelectTeamsComponent,
    TossComponent,
    MatchComponent,
    NavbarComponent,
    AllMatchesComponent,
    SingleMatchDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
