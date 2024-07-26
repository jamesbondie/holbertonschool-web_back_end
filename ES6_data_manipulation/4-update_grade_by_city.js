/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
    const lockies = students.filter((student) => student.location === city && student.id === newGrades.studentId);
    
    const idlockies = lockies.map((x) => {
        if (newGrades.grade) {
            x.grade = newGrades.grade
        }
        else {
            x.grade = "N/A"
        }
        return x;
    });
    return idlockies;
}
