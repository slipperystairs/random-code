#! /usr/bin/node
'use strict'
const fs = require('fs');

const main = async () => {
  const data = await fs.readFileSync('test.txt');
  const lines = data.toString().split('\n');
  const arr = [];
  let brackets = null;
  let sentences = null;
  let s_letters = null;
  let result = null;

  try {
    for (const line of lines) {
      if ((result = /([^\.\?\!]*)[\.\?\!]/.exec(line))) {
        sentences = result[0];
        const words = sentences.split('.');
        let found = false;
        let idx = 0;
        while (!found && idx < words.length) {
          if (/^s?/.test(words[idx])) {
            found = true;
            console.log('words: ', words[idx]);
            s_letters = words[idx];
          }
          idx++;
        }
      } else if (s_letters && (result = /\[(.*?)\]/.exec(line))) {
        brackets = result[0];
      } else if (s_letters) {
        arr.push({ s_letters, sentences, brackets });
      }
    }
    console.log('arr: ', arr);
  } catch (e) {
    console.log('Err in main: ', e);
  }
}

main().then(() => {
  console.log('Done');
}).catch((err) =>{
  console.log('Error: ', err);
});
