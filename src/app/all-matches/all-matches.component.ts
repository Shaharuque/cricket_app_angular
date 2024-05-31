import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CricketApiService } from '../services/cricket-api.service';
import { Match } from '../../types';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrl: './all-matches.component.css'
})
export class AllMatchesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'team1', 'team2', 'tossWinner', 'matchWinner', 'actions'];
  dataSource = new MatTableDataSource<Match>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private matchService: CricketApiService ){}

  fetchMatches() {
     // getting all matches played till now
     this.matchService.getMatches().subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  ngOnInit() {
    this.fetchMatches();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  viewMatchDetails(id: string) {
    console.log('View match details for:', id);
  }

}



