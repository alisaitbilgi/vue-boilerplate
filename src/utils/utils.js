/**
 * Uniquifies the array (array of objects) according to required key.
 * @param defaultList: array of object which is gonna be uniquified.
 * @param keyTbUniquified: reference key for uniquification operation.
 */

export function uniquifyArrayOfObjects (defaultList, keyTbUniquified) {
  const existincyCheckMap = {}

  return defaultList.filter(each => {
    if (typeof existincyCheckMap[each[keyTbUniquified]] === 'undefined') {
      existincyCheckMap[each[keyTbUniquified]] = true
    }

    if (existincyCheckMap[each[keyTbUniquified]]) {
      existincyCheckMap[each[keyTbUniquified]] = false

      return true
    }

    return false
  })
}

/**
 * Uniquifies the array (array of primitives).
 * @param defaultList: array which is gonna be uniquified.
 */

export function uniquifyArrayOfPrimitives (defaultList) {
  return [...new Set(defaultList)]
}
