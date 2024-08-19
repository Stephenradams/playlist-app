import { Component, inject } from '@angular/core';
import { PlaylistStore } from '../../store/playlist.store';
import { PlaylistDetailsComponent } from "../../ui/playlist-details/playlist-details.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [PlaylistDetailsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  readonly store = inject(PlaylistStore);

}
