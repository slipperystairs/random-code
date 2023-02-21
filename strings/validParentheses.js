#! /usr/bin/env node
// Given a string s containing just the characters '(', '), '{', '}', '[' and ']',
// determine if the string is valid. An input is valid if:
// * Open brackets must be closed by the same type of brackets.
// * Open brackets must be closed in the correct order.
// * Every close bracket has a corresponding open bracket of the same type.

function isValid(s) {
  const stack = [];
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in legend) {
      stack.push(s[i]);
    } else if (legend[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length > 0 ? false :true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
