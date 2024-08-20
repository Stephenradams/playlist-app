import { Component, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { Playlist } from "../../services/types";
import { PlaylistStore } from "../../store/playlist.store";
import { PlaylistDisplayComponent } from "../../ui/playlist-display/playlist-display.component";
import { SearchBoxComponent } from "../../ui/search-box/search-box.component";

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

  filterableplaylists = this.store.featuredPlaylists();

  selectedPlaylistHandler(playlist: Playlist): void {
    console.log("Selected playlist:", playlist.id);
    this.store.setSelectedPlaylist(playlist);
    this.router.navigate(["/details", playlist.id]);
  }

  searchHandler(searchTerm: string): void {
    this.store.searchForPlaylist({ searchTerm });
  }

  clearHandler(): void {
    console.log("Clearing search term");
    // this.store.loadPlaylist();
    this.store.resetPlaylist();
  }
}
