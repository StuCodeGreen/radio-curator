
# 📻 radio-curator

⚙️ A utility script to curate and clean internet radio station data from the [Radio Browser API](https://www.radio-browser.info/).  
It curates station data, merges custom entries, enriches metadata, and outputs a clean dataset ready for apps or websites.

## Features

- Fetches and filters station data from Radio Browser
- Curates inconsistent metadata
- Merges custom-defined stations
- Outputs a curated JSON file for frontend/mobile use

## Requirements

- Node.js
- TypeScript

## Setup

```bash
git clone https://github.com/your-username/radio-curator.git
cd radio-curator
npm install
```
## Scripts

| Command          | Description                         |
|------------------|-------------------------------------|
| `npm run dev`    | Run the main script in dev mode     |
| `npm start`      | Run the main script                 |
| `npm run fetch`  | Fetch raw data from API             |
| `npm run build`  | Build the final cleaned JSON file   |

## Environment

Create a `.env` file to configure any secrets or environment options if needed.

## License

MIT
