import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private baseUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  getEpisodes(page: number = 1): Observable<any> {
  return this.http.get<any>(`https://rickandmortyapi.com/api/episode?page=${page}`);
}


  getEpisodeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getEpisodeByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
