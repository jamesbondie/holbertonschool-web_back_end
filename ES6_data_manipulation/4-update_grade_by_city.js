/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
        .filter((student) => student.location === city)
        .map((x) => {
            const xy = newGrades.find((y) => y.studentId === x.id);
            if (xy) {
                x.grade = xy.grade;
            } else {
                x.grade = "N/A";
            }
            return x;
        });
}
