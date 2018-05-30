function forEachReplacer(arr, func, ctx) {
  for (let i = 0; i < arr.length; i += 1) {
    func.call(ctx, arr[i], i, arr);
  }
}

// tests
const array = [];
const obj = {};

forEachReplacer([1, 2, 3], console.log, 0);
forEachReplacer([1, 2, 3], (item) => {
  array.push(item);
});
forEachReplacer([1, 2, 3], function pusher(item, index) {
  this[index] = item;
}, obj);

console.log(array);
console.log(obj);
