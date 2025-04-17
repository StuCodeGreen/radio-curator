// Raw station data from Radio Browser API (only what we use)
export interface StationApiRaw {
  stationuuid: string;
  name: string;
  url_resolved: string;
  homepage: string;
  favicon: string;
  country: string;
  countrycode: string;
  language: string;
  tags: string;
  codec: string;
  bitrate: number;
}

export interface Station {
  id: string;
  name: string;
  streamUrl: string;
  homepage: string;
  favicon: string;
  country: string;
  countryCode: string;
  languages: string[];
  tags: string[];
  codec: string;
  bitrate: number;
  isCustom: boolean;
  nowPlayingUrl?: string;
  parseNowPlaying?: (data: unknown) => string;
}