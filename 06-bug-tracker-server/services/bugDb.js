const fs = require('fs'), path = require('path');

const dbFile = path.join(__dirname, '..', '/db/data.json');

async function getBugs() {
    return new Promise(
        function(resolve, reject){
        fs.readFile(dbFile, { encoding: 'utf8'}, function(err, bugList){
            if (err){
                console.log("Error occured while reading from data.json DB", err);
                return;
            }
            resolve(bugList);
        });
    });
}

function setBugs(bugList) {
    try {
        fs.writeFileSync(dbFile, JSON.stringify(bugList));
    } catch (err) {
        console.log("Error occured while writing to data.json DB", err);
    }
}

module.exports = {getBugs, setBugs};