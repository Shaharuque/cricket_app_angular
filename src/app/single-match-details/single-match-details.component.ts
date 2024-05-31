import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CricketApiService } from '../services/cricket-api.service';

@Component({
  selector: 'app-single-match-details',
  templateUrl: './single-match-details.component.html',
  styleUrl: './single-match-details.component.css'
})
export class SingleMatchDetailsComponent {

  matchId:string = '';

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private matchService: CricketApiService
  ) {}

  fetchMatchDetails() {
    this.matchService.getMatchDetails(this.matchId).subscribe(
      (data) => {
        console.log('Match details:', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      const id = params.get('matchId');
      this.matchId = id || '';
    });

    this.fetchMatchDetails();
  }
}
