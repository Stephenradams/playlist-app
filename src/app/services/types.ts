export interface PlaylistState {
  featuredPlaylists: {
    name?: string;
    content: Playlist[];
  };
  filterableplaylists: {
    content: Playlist[];
  };
  selectedPlaylist: Playlist | null;
  isLoading: boolean;
}

export interface Playlist {
  id: string;
  name: string;
  kind: string;
  url: string;
  curator_name: string;
  artwork: string;
}

export interface FilterablePlaylist {
  name: string;
  content: Playlist[];
}
