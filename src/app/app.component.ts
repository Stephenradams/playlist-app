import { Component, inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./ui/header/header.component";
import { PlaylistStore } from "./store/playlist.store";
import { NavigationComponent } from "./ui/navigation/navigation.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavigationComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  store = inject(PlaylistStore);

  async ngOnInit() {
    this.store.loadPlaylist();
  }
}
