import { TestBed } from "@angular/core/testing";

import {
  HttpTestingController,
  provideHttpClientTesting,
} from "@angular/common/http/testing";
import { environment } from "../../environments/environment.development";
import { PlaylistService } from "./playlist.service";
import { PlaylistState } from "./types";
import { provideHttpClient } from "@angular/common/http";

describe("PlaylistService", () => {
  let service: PlaylistService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlaylistService,
        HttpTestingController,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(PlaylistService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should retrieve playlist from the server", () => {
    const mockPlaylist: PlaylistState = {
      featuredPlaylists: {
        name: "Test Playlist",
        content: [],
      },
      filterableplaylists: {
        content: [],
      },
      selectedPlaylist: null,
      isLoading: false,
    };

    service.getPlaylist().subscribe((playlist) => {
      expect(playlist).toEqual(mockPlaylist);
    });

    const req = httpMock.expectOne(environment.baseUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPlaylist);
  });
});
