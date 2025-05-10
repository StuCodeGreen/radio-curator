import 'dotenv/config';
import fs from 'fs/promises';
import { StationApiRaw } from './types'

const country = process.env.COUNTRY || 'Lithuania';
const API_URL = `https://de2.api.radio-browser.info/json/stations/bycountry/${encodeURIComponent(country)}`;

export async function fetchAndSaveRawStations(): Promise<void> {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const stations = await res.json() as StationApiRaw[];

    await fs.mkdir('output', { recursive: true });
    await fs.writeFile('output/raw.json', JSON.stringify(stations, null, 2), 'utf-8');

    console.log(`✅ Fetched ${country}'s stations and saved result of ${stations.length} to output/raw.json`);
  } catch (err) {
    console.error('❌ Failed to fetch stations:', err);
  }
}

// Optional: auto-run when called directly
if (process.argv[1].endsWith('fetchData.ts')) {
  fetchAndSaveRawStations();
}
