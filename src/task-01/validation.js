/*
Write a program to check the validity of password input by users.
Validation:
- At least 1 letter between [a-z] and 1 letter between [A-Z].
- At least 1 number between [0-9].
- At least 1 character from [$#@].
- Minimum length 6 characters.
- Maximum length 16 characters.
*/
const valid = (str) => {
  if (
    (/[A-Z]/i.test(str)) &&
    (/\d/.test(str)) &&
    (/[$#@]/.test(str)) &&
    (str.length >= 6) &&
    (str.length <= 16)
  ) {
    return true;
  }
  return false;
};

console.log(valid('12asdf'));
console.log(valid('Aaza1234566#'));
