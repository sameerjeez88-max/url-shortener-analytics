/**
 * @project Custom URL Shortener & Click Analytics Engine
 * @author Rana Yasir Mahy Ud Din
 * @website https://ranayasir.unaux.com/
 * @github https://github.com/Sameerjeez88-max
 * @copyright 2026 Rana Yasir Mahy Ud Din. All Rights Reserved.
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const urlRoutes = require('./src/routes/urlRoutes');
const { urlDatabase } = require('./src/data/store');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', urlRoutes);

// Redirect Route (GET /:shortCode)
app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;
  const urlRecord = urlDatabase.find(u => u.shortCode === shortCode);

  if (!urlRecord) {
    return res.status(404).sendFile(path.join(__dirname, 'public/index.html'));
  }

  // Increment clicks and record analytics log
  urlRecord.clicks += 1;
  urlRecord.clickLogs.push({
    time: new Date().toISOString().replace('T', ' ').substring(0, 16),
    userAgent: req.headers['user-agent'] || 'Unknown'
  });

  return res.redirect(urlRecord.longUrl);
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`========================================================`);
  console.log(`URL Shortener running on http://localhost:${PORT}`);
  console.log(`Developed by: Rana Yasir Mahy Ud Din`);
  console.log(`========================================================`);
});