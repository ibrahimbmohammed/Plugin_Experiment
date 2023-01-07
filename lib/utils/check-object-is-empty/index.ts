/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unreachable-loop */
function isObjectEmpty<T>(object: T) {
    if (object === null || object === undefined) return true;
    for (const property in Object.keys(object)) {
        return false;
    }
    return true;
}

export default isObjectEmpty;

// source: https://bobbyhadz.com/blog/javascript-check-if-object-is-empty
