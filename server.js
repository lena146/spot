const express = require('express');
const fetch = require('node-fetch');
const xml2js = require('xml2js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = 'https://data.gm.go.kr/openapi/Museumartglry?key=';

// 공공API 접근 불가 환경(해외 서버) 대비 정적 데이터
const FALLBACK_VENUES = [
  { name: '충현박물관', address: '경기도 광명시 오리로347번길 5-6 (소하동)', lat: 37.4339290123, lng: 126.8777210245, type: '박물관', museumType: '전문박물관', status: '운영중', openDate: '20031024', ownership: '사립', zipCode: '14333' },
  { name: '주품음악박물관', address: '경기도 광명시 오리로 435-19 (광명동)', lat: 37.4416970461, lng: 126.877396696, type: '박물관', museumType: '종합박물관', status: '운영중', openDate: '20120622', ownership: '사립', zipCode: '14332' },
  { name: '나비야놀자 박물관', address: '경기도 광명시 장절로 56-16 (노온사동)', lat: 37.4272868441, lng: 126.852707386, type: '박물관', museumType: '전문박물관', status: '폐업 등', openDate: '20051014', ownership: '사립', zipCode: '14334' },
  { name: '나비야놀자박물관', address: '경기도 광명시 장절로 56-16 (노온사동)', lat: 37.4272868441, lng: 126.852707386, type: '박물관', museumType: '전시관', status: '운영중', openDate: '20081007', ownership: '사립', zipCode: '14334' },
  { name: '충현박물관', address: '경기도 광명시 오리로347번길 5-6 (소하동)', lat: 37.4339290123, lng: 126.8777210245, type: '박물관', museumType: '전문박물관', status: '영업', openDate: '20031024', ownership: '사립', zipCode: '14333' },
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/venues', async (req, res) => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(API_URL, { signal: controller.signal });
    clearTimeout(timeout);
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

    if (venues.length === 0) throw new Error('empty response');

    console.log(`[API] fetched ${venues.length} venues from external API`);
    res.json({ success: true, count: venues.length, venues });
  } catch (err) {
    console.warn(`[API] external fetch failed (${err.message}), using fallback data`);
    res.json({ success: true, count: FALLBACK_VENUES.length, venues: FALLBACK_VENUES, fallback: true });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
