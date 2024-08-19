import { Component, inject, OnInit } from '@angular/core';
import { PlaylistStore } from '../../store/playlist.store';
import { Playlist } from '../../services/types';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-playlist-display',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './playlist-display.component.html',
  styleUrl: './playlist-display.component.scss'
})
export class PlaylistDisplayComponent  {

 readonly store = inject(PlaylistStore);

}
