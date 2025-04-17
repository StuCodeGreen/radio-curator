// This is just an example. Copy this file to `secretOverrides.ts` to use locally.
// Do NOT commit the real `secretOverrides.ts` — it's ignored in .gitignore.

export const secretOverrides = {
  'your-stationuuid-here': {
    nowPlayingUrl: 'https://example.com/api/nowplaying',
    parseNowPlaying: (data: unknown) => {
      const d = data as { artist: string; title: string };
      return `${d.artist} - ${d.title}`;
    }
  },

  'another-stationuuid': {
    nowPlayingUrl: 'https://othersite.com/nowplaying',
    parseNowPlaying: (data: unknown) => {
      const d = data as { nowPlaying: string; };
      return d.nowPlaying;
    }
  }
};