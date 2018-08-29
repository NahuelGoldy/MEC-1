const fs = require('fs');

exports.readTextFile = (filepath) => {
    const options = {encoding:'utf-8', flag:'r'};
    return fs.readFileSync(filepath, options);
};

exports.sortFileBuiltIn = (filepath) => {
    const content = JSON.parse(this.readTextFile(filepath));
    return content.sort((a, b) => a - b);
};

exports.sortFile = (filepath) => {
    const content = JSON.parse(this.readTextFile(filepath));


};