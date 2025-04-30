import { StationApiRaw, Station } from './types';
import { stationOverrides } from './stationOverrides';

function getOverride(uuid: string) {
  return stationOverrides[uuid] || {}
}

function splitAndTrim(input?: string): string[] {
  return input?.split(',').map(s => s.trim()) || [];
}

export function normaliseData(raw: StationApiRaw): Station {
  const override = getOverride(raw.stationuuid);

  return {
    id: raw.stationuuid,
    name: raw.name,
    streamUrl: raw.url_resolved,
    homepage: raw.homepage,
    favicon: raw.favicon || 'https://your-default-icon.url/favicon.png',
    country: raw.country,
    countryCode: raw.countrycode,
    languages: splitAndTrim(raw.language),
    tags: splitAndTrim(raw.tags),
    codec: raw.codec,
    bitrate: raw.bitrate,
    isCustom: false,
    ...override,
  };
}

