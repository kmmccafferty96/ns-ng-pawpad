/**
 * Converts an array of objects to an object of objects with the specified keyField
 * as the key and the object as the value.
 * @param array
 * @param keyField
 */
export function arrayToObject(array: object[], keyField: string): any {
    let result = {};
    if (array) {
        result = array.reduce((obj, item) => {
            obj[item[keyField]] = item;
            return obj;
        }, {});
    }
    return result;
}
