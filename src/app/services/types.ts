export interface PlaylistState {
  name: string;
  content: Playlist[];
  selectedPlaylist: number;
}

export type Playlist = {
  id: string;
  name: string;
  url: string;
  curator_name: string;
  artwork: string;
};
