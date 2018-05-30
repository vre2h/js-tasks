/*
Реализуйте и экспортируйте по умолчанию функцию
принимающую в качестве параметра строку
в виде линейного сигнала и возвращающую
строку с бинарным кодом.

Пример использования:

const signal = "_|¯|____|¯|__|¯¯¯";
nrzi(signal); // => "011000110100"

const signal = "|¯|___|¯¯¯¯¯|___|¯|_|¯";
nrzi(signal); // => "110010000100111"
*/

const solution = (signal) => {
  const signalArr = signal.split('');

  const iter = (signalToArr, acc, state = 0) => {
    if (signalToArr.length === 0) {
      return acc;
    }

    const [curr, ...rest] = signalToArr;

    if (curr === '|') {
      return iter(rest, acc, 1);
    }

    if (state === 0) {
      if (curr === '_') {
        acc += '0';
      } else if (curr === '¯') {
        acc += '0';
      }
    } else {
        if (curr === '_') {
          acc += '1';
        } else (curr === '¯') {
          acc += '1';
        }
    }

    return iter(rest, acc, 0);
  };

  return iter(signalArr, '', 0);
};
