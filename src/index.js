const compose = x => y => value => x(y(value));

compose(x => x + 3)(y => y - 1)(10);
