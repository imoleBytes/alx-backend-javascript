export default function appendToEachArrayValue(array, appendString) {
  let c = 0;

  for (const idx of array) {
    /* eslint-disable no-param-reassign */
    array[c] = appendString + idx;
    c += 1;
  }

  return array;
}
