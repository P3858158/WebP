const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to My Home !!</h1>');
});

app.get('/about', (req, res) => {
    res.status(200).send('<h1>Here is KSD HOME !!</h1>');
});

app.get('/main', (req, res) => {
    res.status(200).send('<h1>Here is KSD MAIN HOME !!</h1>');
});

app.listen(3000);