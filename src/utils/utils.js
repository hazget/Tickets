import { isShortDateFormat } from './checkFormats';

/**
 
 * @param {string} inputString 
 * @returns {string} 
 * @version 1.0.0
 */
export const capitalize = inputString => {

  if (typeof inputString !== 'string')
    return '';
  
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

/**
 * @param {string} dateString 
 * @returns {Date} 
 * @version 1.0.0
 */
export const convertToDate = dateString => {

  if(!isShortDateFormat(dateString)) 
    return new Date(undefined);

  const [day, month, year] = dateString.split('.');
  return new Date(year, month - 1, day);
}

/**
 * @param {number} monthNumber 
 * @returns {string} 
 * @version 1.0.0
 */
export const getMonthName = monthNumber => {

 if (!Number.isInteger(monthNumber) || monthNumber < 0 || monthNumber > 11)
    return 'Invalid month';

  const names = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

  return names[monthNumber];
}

/**
 * @param {string} dateString 
 * @returns {string} 
 * @version 1.0.0
 */
export const getLongDate = (dateString) => {

  if (typeof dateString !== 'string')
    return '';

  let date = convertToDate(dateString);

  if((Object.prototype.toString.call(date) !== '[object Date]') || date.toString() === 'Invalid Date')
    return 'Invalid Date';

  let d = date.getDate();
  let m = getMonthName(date.getMonth());
  let y = "20" + date.getFullYear().toString().substr(2,2);
  let dw = capitalize(date.toLocaleString('ru-RU', {weekday: 'short'}));

  return `${d} ${m} ${y}, ${dw}`;
}

/**
 * @version 1.0.0
 */
export const calcPrice = (currencies, currentCurrency) => {

  let findedCurrency;

  if (currencies)
    findedCurrency = currencies.find(x => x.CharCode === currentCurrency.trim().toUpperCase());

  
  return function(price) {
    if (typeof price !== 'number' || price < 0)
      return 'Invalid price';

      if (findedCurrency !== undefined)
        return price / findedCurrency.Value;
      
      return price;
  }
}

/**
 * @param {number} price 
 * @returns {string} 
 * @version 1.0.0
 */
export const formatCurrency = currencyCode => {

  if (typeof currencyCode !== 'string' || !currencyCode.trim().length)
    return 'Invalid currency';

  if (currencyCode.length < 1 && currencyCode.length > 3)
    return 'Invalid currency';

  return function(price) {
    let options = { style: 'currency', currency: currencyCode.trim().toUpperCase(), minimumFractionDigits: 0 }; 

    if (typeof price !== 'number' || price < 0)
      return new Intl.NumberFormat('ru-RU', options).format(0);

    return new Intl.NumberFormat('ru-RU', options).format(price);
  }
}

/**
 * 
 * @version 1.0.0
 */
export const generateString = () => {
  return Math.random().toString(16).substr(2, 7);
}

/**
 * @description 
 * @param {number} number 
 * @param {array} titles
 * @version 1.0.0
 */
export const getDeclension = number => {
  

  if (!Number.isInteger(number))
    return 'Нет данных';

  if (number === 0)
    return '';

  if ([11, 12, 13, 14].includes(getTwoLastDigit(number)))
    return `${number} пересадок`;

  switch(number) {
    case 0:
      return `${number} пересадок`;
    case 1:
      return `${number} пересадка`;
    case 2:
    case 3:
    case 4:
      return `${number} пересадки`;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return `${number} пересадок`;
    default:
      break;
  }
}

/**
 * @param {string} 
 * @returns {string}
 * @version 1.0.0
 */
export const getLastChar = inputString => {

  if (typeof inputString !== 'string' || !inputString.trim().length)
    return '';

  const trimmedText = inputString.trim();

  return trimmedText.charAt(trimmedText.length - 1);
}

/**
 * @param {number} 
 * @returns {number} 
 * @version 1.0.0
 */
export const getTwoLastDigit = number => {

  if (!Number.isFinite(number))
    return null;

  const pattern = /[0-9]{1,2}$/;
  let results =  number.toString().match(pattern); 

  if (results !== null)
    return Number(results[0]);
   
  return null;
}