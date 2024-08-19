import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { PlaylistState } from "../services/types";
import { computed, Inject, inject } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { catchError, EMPTY, merge, mergeMap, pipe, tap } from 'rxjs';

const getInitialState = (): PlaylistState => ({
    name: '',
    content: [],
    selectedPlaylist: 0,
    isLoading: false,
});
    

export const PlaylistStore = signalStore({ providedIn: 'root' }, 
    withState<PlaylistState>(getInitialState()),
    withComputed(({ content }) => {
        const chossenPlaylist = computed(() => content()[0]);

        return {
            chossenPlaylist
        }
    }),
    withMethods((store, apiService = inject(PlaylistService)) => ({
        setIsLoading(isLoading: boolean) {
            patchState(store, { isLoading });
        },
        loadPlaylist: rxMethod<void>(
            pipe(
                tap(() => patchState(store, { isLoading: true })),
                mergeMap(() => apiService.getPlaylist().pipe(
                    tap((playlist) => patchState(store, { ...playlist, isLoading: false })),
                    catchError((error) => {
                        console.error('Error loading playlist', error);
                        return EMPTY;
                    })
                )),
            )
        )
    }))
);  