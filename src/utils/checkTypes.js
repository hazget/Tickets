export const isInteger = number => {
  return typeof value === 'number' && Number.isFinite(number) && !(number % 1);
}

/**
 * @param {string} inputString 
 * @returns {boolean} 
 */
export const isString = inputString => {

  if (typeof inputString === 'string')
    return true;

  return false;
}

/**
 * @param {string} inputString 
 * @returns {boolean}
 */
export const isEmptyString = inputString => {

  if (!isString(inputString) || !inputString.length)
    return true;

  return false;
}