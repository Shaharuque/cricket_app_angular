import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectTeamsComponent } from './components/select-teams/select-teams.component';
import { TossComponent } from './components/toss/toss.component';
import { MatchComponent } from './components/match/match.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { SingleMatchDetailsComponent } from './components/single-match-details/single-match-details.component';

const routes: Routes = [
  { path: '', component: SelectTeamsComponent },
  { path: 'toss', component: TossComponent },
  { path: 'play/:id', component: MatchComponent },
  { path: 'matches', component: AllMatchesComponent },
  { path: 'match/details/:matchId', component: SingleMatchDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
