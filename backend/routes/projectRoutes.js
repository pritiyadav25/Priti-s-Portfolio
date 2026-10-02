const express = require('express');
const router = express.Router();

// Dummy projects data
const projects = [
  { id: 1, title: 'E-commerce App', tech: 'MERN', image: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Weather Dashboard', tech: 'React', image: 'https://via.placeholder.com/300' },
];

router.get('/', (req, res) => {
  res.json(projects);
});

module.exports = router;