const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Header Parser' });
});

router.get('/api/whoami', (req, res) => {
  const software = `${req.useragent.platform}, ${req.useragent.os}`;
  const ip = req.clientIp;
  const lang = req.get('accept-language');
  // show reader-friendly language subtag
  const language = lang.split(',', 1).join();
  const results = {
    ip,
    software,
    language
  };
  res.json(results);
});

module.exports = router;
