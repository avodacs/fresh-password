# fresh-password

Simple, non-offensive password generator.  Generates passwords in the following format:

`{word-a}{word-b}{number}{number}`

This module aims to generate passwords which do not contain "offensive" words.  In order to do this, it generates a password by combining two random words from the `good.json` list, appends two numbers, and then checks the final password against the list of words in `bad.json`.  If there is a match, the password is recursively regenerated until a non-offensive password is (hopefully) generated.

## Sample Passwords

* terriblenet82
* basketdinner76
* stopbreak67
* comparedevelop58
* bravesometimes20
* severalground58
* atgroup48
* topchase84

## Installation

`npm install fresh-password`

## Usage

```
const fp = require('fresh-password');

let password = fp.generate();
```

## Contributing

Please feel free to request changes, especially to the word lists.
