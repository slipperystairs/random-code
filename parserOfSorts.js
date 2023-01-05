#! /usr/bin/node
'use strict'
const fs = require('fs');

const main = async () => {
  const data = await fs.readFileSync('test.txt');
  const lines = data.toString().split('\n');
  const arr = [];
  let brackets = null;
  let sentences = null;
  let b_letters = null;
  let result = null;

  try {
    for (const line of lines) {
      if ((result = /([^\.\?\!]*)[\.\?\!]/.exec(line))) {
        sentences = result[0];
        const words = sentences.split(' ');
        let found = false;
        let idx = 0;
        console.log('words: ', words);
        while (!found && idx < words.length) {
          console.log('inside the while looop');
          if (/^a/.test(words[idx])) {
            found = true;
            b_letters = words[idx];
            console.log('b_letters: ', b_letters);
          }
        }
      }
    }
  } catch (e) {
    console.log('Err in main: ', e);
  }
}

main().then(() => {
  console.log('Done');
}).catch((err) =>{
  console.log('Error: ', err);
});
