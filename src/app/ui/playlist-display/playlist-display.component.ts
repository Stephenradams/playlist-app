import { Component, EventEmitter, inject, OnInit, Output } from "@angular/core";
import { PlaylistStore } from "../../store/playlist.store";
import { Playlist } from "../../services/types";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { JsonPipe } from "@angular/common";

export interface ElementData {
  name: string;
  type: string;
  curator_name: string;
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
  @Output() action: EventEmitter<Playlist> = new EventEmitter<Playlist>();

  displayedColumns: string[] = ["name", "kind", "curator", "action"];

  onAction(element: Playlist): void {
    this.action.emit(element);
  }
}
