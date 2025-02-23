const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware: enable CORS and parse JSON request bodies
app.use(cors());
app.use(express.json());

// In-memory storage for toggle state
let toggleState = false;

// GET endpoint to retrieve the current toggle state
app.get('/api/toggle', (req, res) => {
  res.json({ state: toggleState });
});

// POST endpoint to update the toggle state
app.post('/api/toggle', (req, res) => {
  const { state } = req.body;
  if (typeof state === 'boolean') {
    toggleState = state;
    res.json({ state: toggleState, message: 'State updated successfully' });
  } else {
    res.status(400).json({ error: 'Invalid state value' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
