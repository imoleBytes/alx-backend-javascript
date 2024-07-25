export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let c = 0;

  for (const name of reportWithIterator) {
    if (c !== 0) {
      str += ' | ';
    }
    str += name;
    c += 1;
  }
  return str;
}
