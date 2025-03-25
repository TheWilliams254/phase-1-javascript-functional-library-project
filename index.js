function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    values.forEach(callback);
    return collection;
}
function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.map(callback);
}
function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined) {
        acc = values[0];
        values.slice(1).forEach(val => acc = callback(acc, val, collection));
    } else {
        values.forEach(val => acc = callback(acc, val, collection));
    }
    return acc;
}
function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.find(predicate);
}
function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.filter(predicate);
}
function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}
function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}
function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}
function myKeys(object) {
    return Object.keys(object);
}
function myValues(object) {
    return Object.values(object);
}
