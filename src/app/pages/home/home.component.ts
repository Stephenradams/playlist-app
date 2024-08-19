import { Component } from "@angular/core";
import { PlaylistDisplayComponent } from "../../ui/playlist-display/playlist-display.component";
import { SearchBoxComponent } from "../../ui/search-box/search-box.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [SearchBoxComponent, PlaylistDisplayComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
