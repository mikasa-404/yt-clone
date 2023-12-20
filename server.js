// server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 1999;

app.use(cors());

app.get('/api/data/:query', async (req, res) => {
    try {
        const query=req.params.query;
        const apiUrl = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+query;
        const response = await fetch(apiUrl);
    
        if (!response.ok) {
          throw new Error('Failed to fetch data from the Swiggy API');
        }
    
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
