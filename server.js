import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// For compatibility with ES modules, get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve the static files from the dist folder under /violetai
app.use('/violetai', express.static(path.join(__dirname, 'dist')));

// Handle the root route by serving index.html
app.get('/violetai', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(4173, () => {
  console.log('Server is running on port 4173');
});
