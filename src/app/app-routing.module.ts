import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectTeamsComponent } from './select-teams/select-teams.component';
import { TossComponent } from './toss/toss.component';
import { MatchComponent } from './match/match.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', component: SelectTeamsComponent },
  { path: 'toss', component: TossComponent },
  { path: 'match/:id', component: MatchComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
