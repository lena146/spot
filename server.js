const express = require('express');
const fetch = require('node-fetch');
const xml2js = require('xml2js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = 'https://data.gm.go.kr/openapi/Museumartglry?key=';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/venues', async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const xmlText = await response.text();

    const parser = new xml2js.Parser({ explicitArray: false, trim: true });
    const result = await parser.parseStringPromise(xmlText);

    const rawRows = result?.Museumartglry?.row;
    const rows = Array.isArray(rawRows) ? rawRows : rawRows ? [rawRows] : [];

    const venues = rows
      .filter(row => row.REFINE_WGS84_LAT && row.REFINE_WGS84_LOGT)
      .map(row => ({
        name: row.BIZPLC_NM || '',
        address: row.REFINE_ROADNM_ADDR || '',
        lat: parseFloat(row.REFINE_WGS84_LAT),
        lng: parseFloat(row.REFINE_WGS84_LOGT),
        type: row.CULTUR_PHSTRN_INDUTYPE_NM || '',
        museumType: row.MUSEUM_ARTGLRY_TYPE_NM || '',
        status: row.BSN_STATE_NM || '',
        openDate: row.OPENHL_DE || '',
        ownership: row.FOUND_OPERT_MAINBD_DIV_NM || '',
        zipCode: row.REFINE_ZIP_CD || '',
      }));

    res.json({ success: true, count: venues.length, venues });
  } catch (err) {
    console.error('API fetch error:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
