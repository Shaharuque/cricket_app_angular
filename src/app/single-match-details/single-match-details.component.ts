import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CricketApiService } from '../services/cricket-api.service';
import { Inning, MatchDetails } from '../../types';

@Component({
  selector: 'app-single-match-details',
  templateUrl: './single-match-details.component.html',
  styleUrls: ['./single-match-details.component.css', '../match/match.component.css']
})
export class SingleMatchDetailsComponent implements OnInit {

  matchId: string = '';
  matchData: any | undefined; // Define matchData as MatchDetails or undefined
  matchInnings: Inning[] = [];
  displayedColumns: string[] = ['ball', 'run']; //for table

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private matchService: CricketApiService
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      const id = params.get('matchId');
      this.matchId = id || '';
      this.fetchMatchDetails(); // Call fetchMatchDetails() after matchId is set
    });
  }

  fetchMatchDetails() {
    if (this.matchId) {
      this.matchService.getMatchDetails(this.matchId).subscribe(
        (data: MatchDetails) => {
          this.matchData = data;
          this.matchInnings = data.innings;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }
}
