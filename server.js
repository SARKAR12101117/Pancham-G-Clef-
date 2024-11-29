const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to serve the Thank You page
app.get('/thank-you.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'thank-you.html'));
});

// Start the server on port 3000
const port = 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
});
