//Task-6: Given an array of student objects, print each student’s name and marks.

const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

for (const student of students){
    console.log(student.name, 'scored', student.marks);
}