const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to check if a number is even or odd
app.post('/check', (req, res) => {
    const { number } = req.body;

    if (typeof number !== 'number') {
        return res.status(400).send({ error: 'Please provide a valid number' });
    }

    const isEven = number % 2 === 0;
    res.send({ number, isEven });
});

app.listen(port, () => {
    console.log(Server is running on http://localhost:3000);
});