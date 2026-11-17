/**
 * @project Custom URL Shortener & Click Analytics Engine
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

// In-memory URL database store with click tracking logs
const urlDatabase = [
  {
    id: 1,
    shortCode: 'fastek',
    longUrl: 'https://www.fastekdot.com',
    clicks: 14,
    createdAt: '2026-11-17 12:00',
    clickLogs: []
  }
];

module.exports = { urlDatabase };