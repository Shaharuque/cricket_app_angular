import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match, MatchDetails, MatchInterface, Team } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class CricketApiService {
  // Local URL (comment out if need and comment Hosted URL)
  // private apiUrl = 'http://localhost:3000/teams';
  // private postUrl = 'http://localhost:3000/matches';

  // Hosted URL
  private apiUrl = 'https://fakejsonserver-production.up.railway.app/teams';
  private postUrl = 'https://fakejsonserver-production.up.railway.app/matches';

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

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.postUrl);
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
