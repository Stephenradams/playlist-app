import { Component } from "@angular/core";
import { SearchBoxComponent } from "../../ui/search-box/search-box.component";
import { PlaylistDetailsComponent } from "../../ui/playlist-details/playlist-details.component";
import { PlaylistDisplayComponent } from "../../ui/playlist-display/playlist-display.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [SearchBoxComponent, PlaylistDisplayComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
