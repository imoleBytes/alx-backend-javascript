export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((value) => value.location === city)
    .map((value) => {
      const obj = newGrades.find((grade) => grade.studentId === value.id);
      /* eslint-disable no-param-reassign */
      value.grade = obj ? obj.grade : 'N/A';
      return value;
    });
}
