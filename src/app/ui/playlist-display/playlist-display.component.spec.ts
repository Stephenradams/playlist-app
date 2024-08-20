import { ComponentFixture, TestBed } from "@angular/core/testing";

import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { Playlist } from "../../services/types";
import { PlaylistStore } from "../../store/playlist.store";
import { PlaylistDisplayComponent } from "./playlist-display.component";

describe("PlaylistDisplayComponent", () => {
  let component: PlaylistDisplayComponent;
  let fixture: ComponentFixture<PlaylistDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistDisplayComponent],
      providers: [
        PlaylistStore,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync("animations"),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit action event when onAction is called", () => {
    const playlist: Playlist = {
      id: "1",
      name: "Test Playlist",
      curator_name: "Test Curator",
      kind: "Test Type",
      url: "http://test.com",
      artwork: "http://test.com/artwork.jpg",
    };
    spyOn(component.action, "emit");
    component.onAction(playlist);
    expect(component.action.emit).toHaveBeenCalledWith(playlist);
  });
});
