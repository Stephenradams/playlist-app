import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PlaylistState } from './types';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  

  constructor(
    private http: HttpClient
  ) { }

  getPlaylist(): Observable<PlaylistState> {
    return this.http.get<PlaylistState>(`${environment.baseUrl}featured-playlist.json`);
  }
}
