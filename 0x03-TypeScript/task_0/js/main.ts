// 1. Create an interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: 'Palesa',
  lastName: 'Motlako',
  age: 26,
  location: 'Sebokeng',
};

const student2: Student = {
  firstName: 'Thabo',
  lastName: 'Mokoena',
  age: 30,
  location: 'Soweto',
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Create a table and render it
const table = document.createElement('table');
const header = table.insertRow();
header.innerHTML = '<th>First Name</th><th>Location</th>';

studentsList.forEach((student) => {
  const row = table.insertRow();
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
});

// 5. Append table to the body
document.body.appendChild(table);
