import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchDetails, MatchInterface, Team } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class CricketApiService {
  // private apiUrl = 'http://localhost:3000/teams'; // Replace with your API endpoint
  // private postUrl = 'http://localhost:3000/matches'; // Replace with your API endpoint

  // Hosted URL
  private apiUrl = 'https://cricket-app-server.onrender.com/teams';
  private postUrl = 'https://cricket-app-server.onrender.com/matches';

  constructor(private http: HttpClient) {}

  // get all teams
  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }

  // post match details data
  postData(data: MatchInterface): Observable<MatchInterface> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    return this.http.post<MatchInterface>(this.postUrl, body, {
      headers: headers,
    });
  }

  //get all matches
  getMatches(): Observable<any> {
    return this.http.get<any>(this.postUrl);
  }

  //get single match details
  getMatchDetails(id: string): Observable<MatchDetails> {
    return this.http.get<MatchDetails>(`${this.postUrl}/${id}`);
  }

  //delete match
  deleteMatch(id: string): Observable<any> {
    return this.http.delete<any>(`${this.postUrl}/${id}`);
  }
}

export { Team };
