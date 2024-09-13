import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./ui/header/header.component";
import { PlaylistStore } from "./store/playlist.store";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HeaderComponent],
      providers: [
        PlaylistStore,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: "" } },
          },
        },
      ],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should load playlist on initialization", async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const playlistStore = TestBed.inject(PlaylistStore);

    spyOn(playlistStore, "loadPlaylist");

    await app.ngOnInit();

    expect(playlistStore.loadPlaylist).toHaveBeenCalled();
  });
});
