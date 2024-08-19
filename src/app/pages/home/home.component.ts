import { Component, inject } from "@angular/core";
import { PlaylistDisplayComponent } from "../../ui/playlist-display/playlist-display.component";
import { SearchBoxComponent } from "../../ui/search-box/search-box.component";
import { PlaylistStore } from "../../store/playlist.store";
import { Playlist } from "../../services/types";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [SearchBoxComponent, PlaylistDisplayComponent, RouterModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  readonly store = inject(PlaylistStore);
  constructor(private router: Router) {}

  selectedPlaylistHandler(playlist: Playlist): void {
    console.log("Selected playlist:", playlist.id);
    this.router.navigate(["/details", playlist.id]);
  }
}
