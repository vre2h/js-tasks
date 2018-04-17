/*
Write a program which will give you all of the potential combinations of a two-digit
decimal combination, printed in a comma delimited format
‘00’, ‘01’, ‘02’, ..., ‘98’, ‘99’
*/

const twoDig = () => {
  let res = '';

  for (let i = 0; i <= 9; i += 1) {
    for (let j = 0; j <= 9; j += 1) {
      if (i === 9 && j === 9) {
        res += `${i}${j}`;
      } else {
        res += `${i}${j}, `;
      }
    }
  }
  return res;
};

console.log(twoDig());
