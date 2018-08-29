const express = require('express');
const app = express();
const sorter = require('./sorter.js');
const utils = require('./utils.js');

app.listen(3000, function () {
    console.log('Sorter started!');

    const filepath = 'C:\\Users\\042\\Downloads\\dataset.txt';
/*
    // Example using built-in sorting - used for benchmarking
    const content = JSON.parse(utils.readTextFile(filepath));
    console.time('Built-in Sorting');
    const result = content.sort((a, b) => a - b);
    console.timeEnd('Built-in Sorting');
*/

    const content = JSON.parse(utils.readTextFile(filepath));

    console.time('Sorting execution time');
    const result = sorter.mergeSort(content);
    console.timeEnd('Sorting execution time');

    utils.writeTextFile(result);

});