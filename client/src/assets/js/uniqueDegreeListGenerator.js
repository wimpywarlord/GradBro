import fs from 'fs';
import DEGREES from './degreeList.js';

// Function to remove duplicates based on degree_title
function removeDuplicates(list) {
  const seen = new Set();
  return list.filter(item => {
    const duplicate = seen.has(item.degree_title);
    seen.add(item.degree_title);
    return !duplicate;
  });
}

const degreeList = DEGREES

const uniqueDegreeList = removeDuplicates(degreeList);

// Convert the list of unique objects to a JSON string
const jsonString = JSON.stringify(uniqueDegreeList, null, 2);

// Write the JSON string to a .txt file
fs.writeFile('uniqueDegrees.txt', jsonString, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File has been saved!');
  }
});