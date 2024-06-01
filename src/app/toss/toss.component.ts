import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid'; // Import the UUID function
import { Team } from '../../types';

@Component({
  selector: 'app-toss',
  templateUrl: './toss.component.html',
  styleUrl: './toss.component.css',
})
export class TossComponent {
  matchId?: string; // Declare a variable to hold the unique match ID
  team1 = {} as Team;
  team2 = {} as Team;
  tossResult= {} as Team;
  selectedTeam: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.matchId = uuidv4(); // Generate a unique match ID
    const team1String = localStorage.getItem('team1');
    const team2String = localStorage.getItem('team2');

    if (team1String) {
      this.team1 = JSON.parse(team1String);
    }

    if (team2String) {
      this.team2 = JSON.parse(team2String);
    }
  }

  performToss() {
    this.tossResult = Math.random() > 0.5 ? this.team1 : this.team2;
    this.selectedTeam = this.tossResult.name;
    localStorage.setItem('tossWinner', JSON.stringify(this.tossResult));
  }

  startMatch() {
    this.router.navigate([`/play/${this.matchId}`]);
  }
}
