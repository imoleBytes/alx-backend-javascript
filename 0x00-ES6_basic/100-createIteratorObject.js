export default function createIteratorObject(report) {
  const allnames = [];
  /*  eslint-disable guard-for-in  */
  for (const i in report.allEmployees) {
    allnames.push(...report.allEmployees[i]);
  }
  return allnames;
}
