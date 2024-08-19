import { Component, inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./ui/header/header.component";
import { PlaylistStore } from "./store/playlist.store";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {

  store = inject(PlaylistStore);

  ngOnInit() {
    this.store.loadPlaylist();
    this.store.logState();
  }
}
