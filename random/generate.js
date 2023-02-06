// This function will store the characters we want in a string. 
// We then loop through the length that is passed into our function and
// concatenate the randomly selected character to our results string.
const randomPassword = (length) => {
  let results = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-+=';
  for (let i = 0; i < length; i++) {
    results += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return results;
}

// This function starts with a characters array with 4 elements
// We then loop through the length that is passed into our function when it is called.
// For each iteration we selected a random charset and then concatenate the resulting charset.
const randomPassword2 = (length) => {
  let results = '';
  const characters = [
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'abcdefghijklmnopqrstuvwxyz',
    '1234567890',
    '!@#$%^&*()-_+=',
  ];
  for (let i = 0; i < length; i++) {
    const charset = characters[Math.floor(Math.random() * characters.length)];
    results += charset[Math.floor(Math.random() * charset.length)];
  }
  return results;
}

// console.log('password: ', randomPassword2(32));
// console.log('password: ', randomPassword2(12));
console.log('password: ', randomPassword2(8));
