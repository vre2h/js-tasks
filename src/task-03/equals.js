const equals = (obj1, obj2) => {
  if (typeof obj1 !== 'object' && obj2 !== 'object') return obj1 === obj2;

  obj1Props = Object.getOwnPropertyNames(obj1);
  obj2Props = Object.getOwnPropertyNames(obj2);
  
  if (obj1Props.length !== obj2Props.length) return false;

  for (const item in obj1Props) {
    if (obj1Props[item] !== obj2Props[item]) return false;
  }

  return true;
};

exports.equals = equals;