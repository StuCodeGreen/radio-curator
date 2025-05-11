export const dataOverrides = {
  'some-stationuuid': {
    nowPlayingUrl: 'https://my-private-api.com',
    parseNowPlaying: (data: unknown) => {
      const d = data as { artist: string; title: string };
      return `${d.artist} - ${d.title}`;
    },
    tags: ['electronic', 'chill'],
  }
};

