// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = () => {};
const createProtoMagicObject = () => {
    var object = Object;
    object.__proto__ = object.prototype;
    return object;
};

const incrementor = () => {};

var async = 0;
const asyncIncrementor = () => {
    async++;
    return async;
};

const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {};


const getDeepPropertiesCount = (object) => {
    return JSON.stringify(object).match(/{/g).length-1;
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = (ar) => {
    function compare(x,y) {
        return x.__proto__ - y.__proto__;
    }
    return ar.sort(compare);
};

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
