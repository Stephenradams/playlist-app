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
import {
    distinctUntilChanged,
    pipe,
    switchMap,
    tap
} from "rxjs";
import { PlaylistService } from "../services/playlist.service";
import { Playlist, PlaylistState } from "../services/types";

const getInitialState = (): PlaylistState => ({
  featuredPlaylists: {
    name: "",
    content: [],
  },
  filterableplaylists: {
    content: [],
  },
  selectedPlaylist: null,
  isLoading: false,
});

export const PlaylistStore = signalStore(
  { providedIn: "root" },
  withState<PlaylistState>(getInitialState()),
  withComputed(({ featuredPlaylists, isLoading, selectedPlaylist }) => {
    return {
      featuredPlaylists: featuredPlaylists,
      selectedPlaylist: selectedPlaylist,
      isLoading: isLoading,
    };
  }),
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
                  filterableplaylists: {
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
    searchForPlaylist: rxMethod<{ searchTerm: string }>(
      pipe(
        distinctUntilChanged(),
        switchMap(({ searchTerm }) =>
          store.filterableplaylists().content.filter((playlist) => {
            return (
              playlist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              playlist.curator_name
                .toLocaleLowerCase()
                .includes(searchTerm.toLowerCase())
            );
          })
        ),
        tap((playlist) => {
          patchState(store, {
            filterableplaylists: {
              content: [playlist],
            },
          });
        })
      )
    ),
    resetPlaylist: rxMethod<void>(
      pipe(
        tap(() => {
          console.log("Resetting playlist");
        }),
        tap(() => {
          patchState(store, {
            filterableplaylists: {
              content: store.featuredPlaylists().content,
            },
          });
        })
      )
    ),
  }))
);
