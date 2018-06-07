const equals = (obj1, obj2) => {
  const props1 = Object.keys(obj1);
  const props2 = Object.keys(obj2);

  if (props1.length !== props2.length) {
    return false;
  }

  if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
    return obj1 === obj2;
  }
  return Object.keys(obj1).every((item) => {
    if (typeof obj1[item] === 'object' && typeof obj2[item] === 'object') {
      return equals(obj1[item], obj2[item]);
    }
    return obj1[item] === obj2[item];
  });
};

export default equals;
