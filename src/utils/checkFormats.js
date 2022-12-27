/**
 * @param {string} dateString 
 * @returns {boolean} 
 */
export const isShortDateFormat = dateString => {

  const regExp = new RegExp('^[0-9]{2}\\.[0-9]{2}\\.[0-9]{2}$');

  if (regExp.test(dateString)) { 

    let arr = dateString.split('.');

    
    if (arr[0] < 1 || arr[0] > 31)
      return false;

    if (arr[1] < 1 || arr[1] > 12)
      return false;

    return true;
  }
  return false;
}