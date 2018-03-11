const createEnumerableProperty = (propertyName) => {
  return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
  return Symbol(propertyName);
};
const createProtoMagicObject = () => {
  const func = () => { };
  func.prototype = func.__proto__;
  return func;
};

let v = 0;
function incrementor() {
  v++;
  return incrementor;
}
incrementor.valueOf = () => v;

let av = 0;
function asyncIncrementor() {
  return new Promise(resolve => {
    av++;
    resolve(av);
  });
}

function* createIncrementer() {
  let v = 1;
  while (true) {
    yield v++;
  }
}

function returnBackInSecond(param) {
  return new Promise(resolve => {
    setTimeout(() => resolve(param), 1000);
  });
}

function getDeepPropertiesCount(obj) {
  const keys = Object.keys(obj);
  let count = keys.length;
  keys.forEach(key => {
    const prop = obj[key];
    if (typeof prop === 'object' && prop !== null) {
      count += getDeepPropertiesCount(prop);
    }
  });
  return count;
}

function createSerializedObject() {
  return null;
}

function sortByProto(arr) {
  return arr;
}

module.exports = {createEnumerableProperty,
  createNotEnumerableProperty,
  createProtoMagicObject,
  incrementor,
  asyncIncrementor,
  createIncrementer,
  returnBackInSecond,
  getDeepPropertiesCount,
  createSerializedObject,
  sortByProto,
};