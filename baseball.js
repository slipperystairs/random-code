// You are keep score of a baseball game with strange rules. The game consists of several
// round, where the scores of past rounds may affect future rounds' scores.
// At the beginning of the game, you start with an empty record. You are given a list of 
// strings ops, where ops[i] is the ith operation you must apply 
// to the record and is one of the following:

// 1. An integer x - Record a new score x.
// 2. "+" - Record a new score that the sum us of the previous two scores. It is guaranteed
// there will always be two previous scores.
// 3. "D" - Record a new score that is double the previous score. It is guaranteed
// there will always be a previous score.
// 4. "C" - Invalidate the previous score, removing it from the record. It is guaranteed
// there will always be a previous score.

/**
 * @param {string[]} ops
 * @return {number}
 */
// const ops = ['5', '2', 'C', 'D', '+'];
const ops = ["5","-2",'4',"C","D","9","+","+"];
var calPoints = function(ops) {
  let score = 0;
  let real_score = 0;
  let doubled = 0;
  let prev_score = [];
  let actual_score = [];
  for (let i = 0; i < ops.length; i++) {
    if (!isNaN(parseInt(ops[i]))) {
      console.log('ops: ', parseInt(ops[i]));
      prev_score.push(parseInt(ops[i]));
    }
    if (ops[i] == 'D') {
      doubled = prev_score * 2;
      prev_score.push(doubled);
    }
    if (ops[i] == 'C') {
      console.log('got popped: ', ops[i]);
      prev_score.pop();
    }
    if (ops[i] == '+') {
      for (let i = 0; i < prev_score.length; i++) {
        score += prev_score[i];
        actual_score.push(prev_score[i]);
      }
      actual_score.push(score);
    }
  }
  for (let i = 0; i < actual_score.length; i++) {
    real_score += actual_score[i];
  }
  console.log('score: ', real_score);
  console.log('prev_score: ', prev_score);
  console.log('actual_Score: ', actual_score);
};

calPoints(ops);

