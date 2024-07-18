import fs from 'fs';
import COLLEGES from './collegeList.js';

// Run this file like so: `node collegeObjectGenerator.js`

function generateUniqueKey() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function listToObjectList(list) {
  return list.map(item => ({
    key: generateUniqueKey(),
    name: item
  }));
}

const myList = COLLEGES; // Replace with your list
const objectList = listToObjectList(myList);

// Convert the list of objects to a JSON string
const jsonString = JSON.stringify(objectList, null, 2);

// Write the JSON string to a .txt file
fs.writeFile('result.txt', jsonString, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File has been saved!');
  }
});