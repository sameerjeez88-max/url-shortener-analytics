const express = require('express');
const { urlDatabase } = require('../data/store');

const router = express.Router();

// GET: Retrieve all shortened URLs and analytics
router.get('/urls', (req, res) => {
  res.status(200).json({ success: true, data: urlDatabase });
});

// POST: Create short URL
router.post('/shorten', (req, res) => {
  try {
    const { longUrl, customCode } = req.body;

    if (!longUrl) {
      return res.status(400).json({ success: false, message: 'Please provide a valid long URL.' });
    }

    // Generate or use custom short code
    const shortCode = customCode ? customCode.trim().replace(/\s+/g, '-') : Math.random().toString(36).substring(2, 8);

    // Check if short code already exists
    const existing = urlDatabase.find(u => u.shortCode === shortCode);
    if (existing) {
      return res.status(400).json({ success: false, message: 'Short code already taken. Choose another.' });
    }

    const newEntry = {
      id: Date.now(),
      shortCode,
      longUrl: longUrl.startsWith('http') ? longUrl : `https://${longUrl}`,
      clicks: 0,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      clickLogs: []
    };

    urlDatabase.unshift(newEntry);
    res.status(201).json({ success: true, message: 'URL shortened successfully!', data: newEntry });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE: Remove short URL
router.delete('/urls/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = urlDatabase.findIndex(u => u.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'URL record not found.' });
    }

    urlDatabase.splice(index, 1);
    res.status(200).json({ success: true, message: 'URL deleted successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;