export default function getListStudentIds(arr) {
  if (Array.isArray(arr) === true) {
    return arr.map((i) => i.id);
  }
  return [];
}

// import getListStudents from "./0-get_list_students.js";

// console.log(getListStudentIds("hello"));
// console.log(getListStudentIds(getListStudents()));
