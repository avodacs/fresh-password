// Load word lists
const goodWords = require('./words/good.json');
const badWords = require('./words/bad.json');

/**
 * Generate a random password
 *
 * @returns {String}
 */
function generate() {
  // Generate 4 random numbers
  let r1 = randomInt(0, goodWords.length);
  let r2 = randomInt(0, goodWords.length);
  let r3 = randomInt(0, 9);
  let r4 = randomInt(0, 9);

  // Pick first and second words
  let firstWord = goodWords[r1];
  let secondWord = goodWords[r2];

  // Generate combined password
  let password = `${firstWord}${secondWord}${r3}${r4}`;

  // Check to see if the combination creates any "offensive" words
  for (let i = 0; i < badWords.length; i++) {
    if (password.indexOf(badWords[i]) > -1) {
      // If so, recursively regenerate
      password = generate();
    }
  }

  // Return the final password
  return password;
}

/**
 * Generate a random number, inclusive of the low and high
 *
 * @param {Number} low Starting number
 * @param {Number} high Ending number
 * @returns
 */
function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

module.exports = {
  generate
};
