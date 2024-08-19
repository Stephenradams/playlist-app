export type PlaylistState = {
  featuredPlaylists: {
    name: string;
    content: Playlist[];
  },
  selectedPlaylist: Playlist | null;
  isLoading: boolean;
}

export type Playlist = {
  id: string;
  name: string;
  kind: string;
  url: string;
  curator_name: string;
  artwork: string;
};
