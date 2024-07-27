/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
    const lockies = students.filter((student) => student.location === city);    
    const idlockies = lockies.map((x) => {
        if (newGrades.grade) {
            x.grade = newGrades.grade
        }
        else {
            x.grade = "N/A"
        }
    });
    return idlockies;
}
