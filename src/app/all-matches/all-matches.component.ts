import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CricketApiService } from '../services/cricket-api.service';
import { Match } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrl: './all-matches.component.css'
})
export class AllMatchesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'team1', 'team2', 'tossWinner', 'matchWinner', 'actions','actions2'];
  dataSource = new MatTableDataSource<Match>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private matchService: CricketApiService, private route: Router ){}

  fetchMatches() {
     // getting all matches played till now
     this.matchService.getMatches().subscribe(
      (data) => {
        this.dataSource = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.paginator);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  ngOnInit() {
    this.fetchMatches();
  }

  viewMatchDetails(id: string) {
    this.route.navigate([`/match/details/${id}`]);
  }

  deleteMatch(id: string) {
    this.matchService.deleteMatch(id).subscribe(
      (data) => {
        this.fetchMatches();
      },
      (error) => {
        console.error('Error deleting match:', error);
      }
    );
  }

}



