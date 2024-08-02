interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Kwame",
  lastName: "Nkrumah",
  age: 56,
  location: 'Ghana'
}

const student2: Student = {
  firstName: "Marcus",
  lastName: "Garvey",
  age: 50,
  location: 'US'
}

const studentsList: Student[] = [student1, student2];

studentsList.forEach(student => console.log(`${student.firstName} | ${student.location}`));
