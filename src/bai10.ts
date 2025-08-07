interface Student {
    readonly studentId: string,
    name: string,
    email: string,
    hasCompleted: boolean,
    finalScore?:number
};
interface Course  {
    courseId: string,
    title: string,
    instrutor: string,
    students: Student[],
    isActive: boolean;
};
interface CourseManager {
    schoolName: string,
    year: number,
    courses: Course[],
}

let manager: CourseManager = {
    schoolName: "PTIT",
    year: 2025,
    courses: [
        {
            courseId: "#COU001",
            title: "TypeScript Co ban",
            instrutor: "Nguyen Van A",
            students: [
                {
                    studentId: "#STU001",
                    name: "Hoc sinh 1",
                    email: "hs1@gmail.com",
                    hasCompleted: true,
                    finalScore: 9
                },
                {
                    studentId: "#STU002",
                    name: "Hoc sinh 2",
                    email: "hs2@gmail.com",
                    hasCompleted: false
                },
                {
                    studentId: "#STU003",
                    name: "Hoc sinh 3",
                    email: "hs3@gmail.com",
                    hasCompleted: true,
                    finalScore: 5.5
                }
            ],
            isActive: true
        },
        {
            courseId: "#COU002",
            title: "HTML & CSS",
            instrutor: "Tran Thi B",
            students: [],
            isActive: false
        }
    ]
}

const getCompletedStudents = (course: Course): Student[] => {
     return course.students.filter(stu => stu.hasCompleted);
}

const calculateAverageScore = (course: Course): number | null => {
    let listStu = getCompletedStudents(course);
    if (listStu) {
        let total = 0;
        listStu.forEach(el => {
            if (el.finalScore) total += el.finalScore;
        });

        let avg = total / listStu.length;
        return avg;
    } else {
        return null;
    }
}

const printCourseReport = (manager: CourseManager): void => {
    manager.courses.forEach((el, index) => {
        console.log(`${index + 1}. Khoa: ${el.title} (GV: ${el.instrutor})`);
        console.log(`- Tong hoc vien: ${el.students.length}`);
        console.log(`- Hoan thanh: ${getCompletedStudents(el).length} hoc vien`);
        console.log(`- Trung binh diem: ${calculateAverageScore(el)}`);
        console.log(`- Trang thai: ${el.isActive? "Dang mo\n":"Da dong\n"}`);
    });
}

printCourseReport(manager);
