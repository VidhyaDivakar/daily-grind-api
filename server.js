const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// app.get('/', (res,req) => {
// res.send('hello');
// });

app.get('/api/fun-fact', async(req, res) => {
    try {
        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        res.json(response.data);
    } catch(error) {
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
        } else {
            console.error('Network Error:', error.message);
            res.status(500).json({message: 'A network error occurred.'});
        }
    }
});  



app.listen(port, () => {
    console.log(`Server is running at port:${port}`);
});