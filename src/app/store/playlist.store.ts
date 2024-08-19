import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
    patchState,
    signalStore,
    withMethods,
    withState
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { PlaylistService } from '../services/playlist.service';
import { PlaylistState } from "../services/types";

const getInitialState = (): PlaylistState => ({
    featuredPlaylists: {
        name: '',
        content: [],
    },
    selectedPlaylist: 0,
    isLoading: false,
});
    

export const PlaylistStore = signalStore({ providedIn: 'root' }, 
    withState<PlaylistState>(getInitialState()),
    withMethods((store, apiService = inject(PlaylistService)) => ({
        setIsLoading(isLoading: boolean) {
            patchState(store, { isLoading });
        },
        loadPlaylist: rxMethod<void>(
            pipe(
                tap(() => patchState(store, { isLoading: true })),
                switchMap(() => apiService.getPlaylist().pipe(
                        tap((response) => console.log('Response:', response)),
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
                                console.error('Error loading playlist', error);
                                patchState(store, { isLoading: false });
                            }
                    )
                    )
                 ),
            )
        ),
        
    }))
);  