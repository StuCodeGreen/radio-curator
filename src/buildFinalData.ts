import fs from 'fs/promises';
import { StationApiRaw, Station } from './types';
import { curateData } from './curateData';

async function buildFinalList() {
  try {
    const rawText = await fs.readFile('output/raw.json', 'utf-8');
    const rawData = JSON.parse(rawText) as StationApiRaw[];

    const curated: Station[] = rawData.map(curateData);

    await fs.writeFile('output/stations.json', JSON.stringify(curated, null, 2), 'utf-8');
    console.log(`✅ Saved ${curated.length} curated stations to output/stations.json`);
  } catch (err) {
    console.error('❌ Failed to build final station list:', err);
  }
}

buildFinalList();

