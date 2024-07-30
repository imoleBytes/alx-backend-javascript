const getStudentsByLocation = (arr, city) => {
  const filteredArr = arr.filter((student) => student.location === city);
  return filteredArr;
};
export default getStudentsByLocation;

// import getListStudents from "./0-get_list_students.js";

// const students = getListStudents();

// console.log(getStudentsByLocation(students, 'San Francisco'));
