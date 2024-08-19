import { isDevMode } from "@angular/core";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { Playlist } from "../services/types";

export interface State {
  playlist: Playlist[];
  name: string;
  selectedPlaylist: number;
}

export const playlistReducer: ActionReducer<Playlist[]> = (
  state = [],
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const nameReducer: ActionReducer<string> = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const selectedPlaylistReducer: ActionReducer<number> = (
  state = 0,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const reducers: ActionReducerMap<State> = {
  playlist: playlistReducer,
  name: nameReducer,
  selectedPlaylist: selectedPlaylistReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
