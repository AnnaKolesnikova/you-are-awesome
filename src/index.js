// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
// for (const key in object) {
//     const object = this;
//     Object.defineProperty(object, propertyName, {
//       enumerable: false,
//       configurable: true
//     });
//   }
  return Symbol(propertyName);
};
const createProtoMagicObject = () => {
  const func = () => {};
    func.prototype = func.__proto__;
    return func;
};

let count = 0;
const incrementor = () => {
  count++;
};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;