
import { Station } from './types';

export const manualData: Station[] = [
  {
    id: 'custom-001',
    name: 'My Custom Station',
    streamUrl: 'https://my.radio/stream',
    homepage: 'https://my.radio',
    favicon: 'https://my.radio/favicon.ico',
    country: 'Nowhereland',
    countryCode: 'NW',
    languages: ['english'],
    tags: ['indie', 'chill'],
    codec: 'MP3',
    bitrate: 128,
    isCustom: true,
    nowPlayingUrl: 'https://my.radio/api/nowplaying',
    parseNowPlaying: (data: unknown) => {
      const d = data as { artist: string; title: string };
      return `${d.artist} - ${d.title}`;
    }
  }
];
