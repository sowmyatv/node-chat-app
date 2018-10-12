const path = require('path');   
const express = require ('express');

var publicPath = path.join(__dirname, '../public');

var app = new express();

app.use (express.static(publicPath));

app.get('/', (req, res) => {
    res.status(200).send("OK");
});

app.listen(3000, () => {
   console.log("App is listening on 3000");}
);