const fs = require('fs'), path = require('path');

const dbFile = path.join(__dirname, '..', '/db/data.json');

function getBugs() {
    const rawData = fs.readFileSync(dbFile);
    return JSON.parse(rawData);
}

function setBugs(bugList) {
    try {
        fs.writeFileSync(dbFile, JSON.stringify(bugList));
    } catch (err) {
        console.log("Error occured while writing to data.json DB", err);
    }
}

module.exports = {getBugs, setBugs};