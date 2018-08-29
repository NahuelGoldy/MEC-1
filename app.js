const express = require('express');
const app = express();
const sorter = require('./sorter.js');

app.get('/', function (req, res) {
    res.send('Sorter started');
    console.log('Sorter started');
    console.log('Sorted content: ' + JSON.stringify(sorter.sortFile('C:\\Users\\042\\Downloads\\dataset2.txt')));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    console.log('Original file content: ' + sorter.readTextFile('C:\\Users\\042\\Downloads\\dataset2.txt'));
});