const fs = require('fs'),
    path = require('path'),
    bugDb = require('./bugDb'),
    promisify = require('util');

const dbFile = path.join(__dirname, '..', '/db/data.json');

//the following line has to be removed
// let bugList = bugDb.getBugs(returnBugs);

function getAll() {
    //replace the following code with the 'async' alternative
    return bugDb.getBugs();
    // return new Promise(
    //     function (resolve, reject) {
    //         bugDb.getBugs(function (data) {
    //             console.log('dat',data);
    //             resolve(data)
    //         })
    //     }

    // )
    // bugList = promisify(bugDb.getBugs);
    // console.log("ABCD", bugList);
    // return bugList;
}

function getById(bugId) {
    return bugList.find(bug => bug.id === bugId);
}

function save(bugData) {
    //read from the file
    const newBugId = bugData.id !== 0 ? bugData.id : bugList.reduce((result, bug) => result > bug.id ? result : bug.id) + 1;
    newBug = { ...bugData, id: newBugId };
    bugList.push(newBug);
    //write into the file
    bugDb.setBugs(bugList);
    return newBug;
}

function update(bugId, updatedBug) {
    const bug = getById(bugId);
    if (!bug) {
        return null;
    }
    bugList = bugList.map(existingBug => existingBug.id === bugId ? updatedBug : existingBug);
    bugDb.setBugs(bugList);
    return updatedBug;
}

function remove(bugId) {
    const bug = getById(bugId);
    if (!bug) {
        return null;
    }
    bugList = bugList.filter(existingBug => existingBug.id !== bugId);
    bugDb.setBugs(bugList);
    return {};
}

module.exports = { getAll, getById, save, update, remove };