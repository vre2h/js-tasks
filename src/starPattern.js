const star = (n) => {
  const curr = '*';

  let space = '';
  let res = '';

  for (let i = n; i > 0; i -= 1) {
    res = space + curr + curr;
    console.log(res);
    space += ' ';
  }
  
};

console.log(star(5));
