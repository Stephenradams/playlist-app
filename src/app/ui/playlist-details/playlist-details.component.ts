import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-playlist-details",
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: "./playlist-details.component.html",
  styleUrl: "./playlist-details.component.scss",
})
export class PlaylistDetailsComponent {
  @Input({ required: true }) name!: string | undefined;
  @Input({ required: true }) kind!: string | undefined;
  @Input() curator_name: string | undefined;
  @Input() artwork: string | undefined;
  @Input() url: string | undefined;

  openInMusicApp() {
    console.log("Opening playlist in music app");
  }
}
