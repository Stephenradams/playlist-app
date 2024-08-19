export type PlaylistState = {
  name: string;
  content: Playlist[];
  selectedPlaylist: number;
  isLoading: boolean;
}

export type Playlist = {
  id: string;
  name: string;
  url: string;
  curator_name: string;
  artwork: string;
};
