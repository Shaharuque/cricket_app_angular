import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchDetails } from '../../types';

interface Team {
  id: number;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CricketApiService {

  private apiUrl = 'http://localhost:3000/teams'; // Replace with your API endpoint
  private postUrl = 'http://localhost:3000/matches'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // get all teams
  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }

   // post match details data
   postData(data:any):Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(data);
    console.log('console body from post api',body)
    return this.http.post<any>(this.postUrl,body,{'headers':headers})
  }

  //get all matches
  getMatches(): Observable<any> {
    return this.http.get<any>(this.postUrl);
  }

  //get single match details
  getMatchDetails(id: string): Observable<MatchDetails> {
    return this.http.get<any>(`${this.postUrl}/${id}`);
  }
}

export {Team}
