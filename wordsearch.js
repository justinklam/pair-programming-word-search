const wordSearch = (letters, word) => {
  if (letters.length === 0) { // edge case for empty matrix
    console.log("Please give array")
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join('')); // load arrays into a large array, join arrays into string
  for (const l of horizontalJoin) { // loop through the joined words
    if (l.includes(word)) return true; // if index includes word, return true
  }
  const verticalJoin = []; // empty array
  for (let col = 0; col < letters[0].length; col++) { // loop through columns
    let string = "";
    for (let row = 0; row < letters.length; row++) { // loop through rows
      string = string.concat(letters[row][col]); // concat rows/column into a string
    }
    verticalJoin.push(string); // push the strings into an array
  }
  for (const j of verticalJoin) { // loop through index[j] of joined array
    if (j.includes(word)) return true; // if index[j] includes the word, return true
  }
  return false; // else return false and exit
};

module.exports = wordSearch;

// pair programming