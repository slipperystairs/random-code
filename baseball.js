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

/* Example 1:
* Input: ops = ["5","2","C","D","+"]
* Output: 30
* Explanation:
* "5" - Add 5 to the record, record is now [5].
* "2" - Add 2 to the record, record is now [5, 2].
* "C" - Invalidate and remove the previous score, record is now [5].
* "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
* "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
* The total sum is 5 + 10 + 15 = 30.
*
* Example 2:
* Input: ops = ["5","-2","4","C","D","9","+","+"]
* Output: 27
* Explanation:
* "5" - Add 5 to the record, record is now [5].
* "-2" - Add -2 to the record, record is now [5, -2].
* "4" - Add 4 to the record, record is now [5, -2, 4].
* "C" - Invalidate and remove the previous score, record is now [5, -2].
* "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
* "9" - Add 9 to the record, record is now [5, -2, -4, 9].
* "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
* "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
* The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
* 
* Example 3:
* Input: ops = ["1"]
* Output: 1
*/

/**
 * @param {string[]} ops
 * @return {number}
 */
let ops;
ops = ['5', '2', 'C', 'D', '+'];
// ops = ["5","-2",'4',"C","D","9","+","+"];
// ops = ['1'];
const total_score_arr = [];
let total_score = 0;
var calPoints = function(ops) {
  for (let i = 0; i < ops.length; i++) {
    if (!isNaN(parseInt(ops[i]))) {
      total_score_arr.push(parseInt(ops[i]));
    } else if (ops[i] == 'C') {
      total_score_arr.pop(total_score_arr[total_score_arr.length - 1]);
    } else if (ops[i] == 'D') {
      total_score_arr.push(parseInt(total_score_arr[total_score_arr.length - 1] * 2));
    } else {
      // We add the last two elements in the array
      total_score_arr.push(parseInt(total_score_arr[total_score_arr.length - 1] + parseInt(total_score_arr[total_score_arr.length - 2])));
    }
  }
  console.log('total_score_arr: ', total_score_arr);
  for (let i = 0; i < total_score_arr.length; i++) {
    total_score += total_score_arr[i];
  }
  console.log('total score for the game: ', total_score);
};

calPoints(ops);
