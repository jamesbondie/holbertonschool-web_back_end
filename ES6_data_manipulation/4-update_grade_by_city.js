/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
    const lockies = students.filter((student) => student.location === city);    
    const idlockies = lockies.map((x) => {
        const xy = newGrades.find((y) => y.studentId === y.id)
        if (xy) {
            x.grade = xy.grade
        }
        else {
            x.grade = "N/A"
        }
    });
    return idlockies;
}
