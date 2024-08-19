import { inject } from "@angular/core";
import { tapResponse } from "@ngrx/operators";
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, switchMap, tap } from "rxjs";
import { PlaylistService } from "../services/playlist.service";
import { Playlist, PlaylistState } from "../services/types";

const getInitialState = (): PlaylistState => ({
  featuredPlaylists: {
    name: "",
    content: [],
  },
  selectedPlaylist: null,
  isLoading: false,
});

export const PlaylistStore = signalStore(
  { providedIn: "root" },
  withState<PlaylistState>(getInitialState()),
  withComputed((state) => ({
    featuredPlaylists: state.featuredPlaylists,
    selectedPlaylist: state.selectedPlaylist,
    isLoading: state.isLoading,
  })),
  withMethods((store, apiService = inject(PlaylistService)) => ({
    setIsLoading(isLoading: boolean) {
      patchState(store, { isLoading });
    },
    setSelectedPlaylist(playlist: Playlist) {
      patchState(store, { selectedPlaylist: playlist });
    },
    loadPlaylist: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          apiService.getPlaylist().pipe(
            tap((response) => console.log("Response:", response)),
            tapResponse(
              (response) => {
                patchState(store, {
                  featuredPlaylists: {
                    name: response.featuredPlaylists.name,
                    content: response.featuredPlaylists.content,
                  },
                  isLoading: false,
                });
              },
              (error) => {
                console.error("Error loading playlist", error);
                patchState(store, { isLoading: false });
              }
            )
          )
        )
      )
    ),
  }))
);
