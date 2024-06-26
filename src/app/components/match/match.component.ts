import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CricketApiService } from '../../services/cricket-api.service';
import { Inning, Team } from '../../../types';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrl: './match.component.css',
})
export class MatchComponent {
  team1= {} as Team;
  team2= {} as Team;
  tossWinner= {} as Team;
  innings: Inning[] = [];
  balls: number = 6; // 6 balls for each team
  play: boolean = false;
  winner?: string = '';
  id: string = '';
  displayedColumns: string[] = ['ball', 'run'];

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private matchService: CricketApiService
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
    });
    const team1String = localStorage.getItem('team1');
    const team2String = localStorage.getItem('team2');
    const tossWinnerString = localStorage.getItem('tossWinner');

    if (team1String) {
      this.team1 = JSON.parse(team1String);
    }

    if (team2String) {
      this.team2 = JSON.parse(team2String);
    }

    if (tossWinnerString) {
      this.tossWinner = JSON.parse(tossWinnerString);
    }

    this.innings.push({ team: this.tossWinner, runs: [], totalRuns: 0 });
  }

  playInning() {
    let currentInning = this.innings[this.innings.length - 1];
    for (let i = 1; i <= this.balls; i++) {
      let run = this.randomRun();
      currentInning.runs.push({ ball: i, run: run });
      currentInning.totalRuns += run;
    }

    if (this.innings.length === 1) {
      let secondTeam =
        this.tossWinner.name === this.team1.name ? this.team2 : this.team1;
      let currentInning2 = this.innings.length;
      this.innings.push({ team: secondTeam, runs: [], totalRuns: 0 });
      for (let i = 1; i <= this.balls; i++) {
        let run = this.randomRun();
        this.innings[currentInning2].runs.push({ ball: i, run: run });
        this.innings[currentInning2].totalRuns += run;
      }
      this.innings[currentInning2].team = secondTeam;
    }
    this.play = true;

    // Determine the winner
    if (this.innings[0].totalRuns > this.innings[1].totalRuns) {
      this.winner = this.innings[0].team.name;
    } else if (this.innings[0].totalRuns < this.innings[1].totalRuns) {
      this.winner = this.innings[1].team.name;
    } else {
      this.winner = "It's a tie!";
    }
    localStorage.setItem('winner', this.winner);

    // Post match data to the API
    const matchData = {
      id: this.id, // Replace with actual unique match ID
      tossWinner: this.tossWinner,
      team1: this.team1,
      team2: this.team2,
      innings: this.innings,
      matchWinner: this.winner,
    };

    this.matchService.postData(matchData).subscribe((data) => {});
  }

  randomRun() {
    const runs = [1, 2, 3, 4, 6];
    return runs[Math.floor(Math.random() * runs.length)];
  }

  showResult() {
    localStorage.setItem('innings', JSON.stringify(this.innings));
    this.route.navigate(['/result']);
  }

  playAgain() {
    this.route.navigate(['/']);
  }
  allMatches() {
    this.route.navigate(['/matches']);
  }
}
