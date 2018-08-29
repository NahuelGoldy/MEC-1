const fs = require('fs');

exports.readTextFile = (filepath) => {
    const options = {encoding:'utf-8', flag:'r'};
    return fs.readFileSync(filepath, options);
};

exports.writeTextFile = (data) => {
    const options = {encoding:'utf-8', flag:'w'};
    fs.writeFileSync('sorted-result.txt', JSON.stringify(data), options);
    console.log('Results written to file');
};