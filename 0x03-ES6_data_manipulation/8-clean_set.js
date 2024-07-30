export default function cleanSet(set, startString) {
  let newStr = '';
  if (startString === '') return '';

  set.forEach((val) => {
    if (val.startsWith(startString)) {
      /* eslint-disable prefer-template */
      newStr += val.slice(startString.length) + '-';
    }
  });
  if (newStr[newStr.length - 1] === '-') newStr = newStr.slice(0, newStr.length - 1);

  return newStr;
}

// console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
// console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
