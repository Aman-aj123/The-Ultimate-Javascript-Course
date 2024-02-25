const express = require('express');
const app = express();
const port = 33001;

const path = require('path');

app.get('/', (req, res) => {
     res.send('Welcome to the node js program..');
});
app.get('/about', (req, res) => {
     res.send('About Page');
});

// If the user do '/home' then we are reindeering 'index.html' file
app.get('/home', (req, res) => {
     res.sendFile(path.join(__dirname, './index.html'));
})

app.get('/contact', (req, res) => {
     res.send('Contact page');
});

app.get('/services', (req, res) => {
     res.send('Services page');
});



// Start a server 
app.listen(port, async () => {
     console.log(`Example app listening on port http://localhost:${port}`);

     const opn = require('opn');
     opn(`http://localhost:${port}`);
});
