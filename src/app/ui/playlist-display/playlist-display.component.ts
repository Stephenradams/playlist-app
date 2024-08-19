import { Component, inject, OnInit } from "@angular/core";
import { PlaylistStore } from "../../store/playlist.store";
import { Playlist } from "../../services/types";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { JsonPipe } from "@angular/common";

export interface ElementData {
  name: string;
  type: string;
}
@Component({
  selector: "app-playlist-display",
  standalone: true,
  imports: [MatTableModule, JsonPipe, MatButtonModule],
  templateUrl: "./playlist-display.component.html",
  styleUrl: "./playlist-display.component.scss",
})
export class PlaylistDisplayComponent {
  readonly store = inject(PlaylistStore);
  displayedColumns: string[] = ["name", "kind", "action"];

  onAction(element: ElementData): void {
    console.log("Action:", element);
  }
}
