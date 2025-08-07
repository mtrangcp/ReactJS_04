//b1: tao cac kieu du lieu can thiet
interface Subject {
    subjectName: string,
    score : number | string
}
interface Student{
    name: string,
    age: number,
    subjects: Subject[]
}
let students: Student[] = [];
// b2: xay dung ham theo yeu cau
function addStudent(student: Student): void {
    students.push(student);
    console.log("Them thanh cong!");
}

function updateStudent(name: string, newName: string, newAge: number): void {
    let findStudent = students.find(student => student.name === name);

    if (findStudent) {
        findStudent.name = newName;
        findStudent.age = newAge;
    } else {
        console.log("Khong tim thay");
    }
}

function delStudent(name: string): void {
    let delIndex = students.findIndex(stu => stu.name === name);
    if (delIndex !== -1) {
        students.splice(delIndex, 1);
    } else {
        console.log("k tim thay");
    }
}

function convert(score: string): number {
    if (score === 'A') return 10;
    else if (score === 'B') return 8;
    else if (score === 'C') return 6;
    else if (score === 'D') return 4;
    else return 0;
}

function avg(student: Student): number {
    let total = student.subjects.reduce((sum, el) => {
        if (typeof el.score === "number") {
            return sum + el.score;
        } else {
            return sum + convert(el.score);
        }
    }, 0);

    return total / student.subjects.length;
}

function rank(student: Student): string {
    if (avg(student) >= 8.5) return "Gioi";
    else if (avg(student) >= 6.5) return "Kha";
    else if (avg(student) >= 5) return "Trung binh";
    else return "Yeu";
}

function showInfo() {
    console.log("Danh sach: \n");
    students.forEach(stu => {
        let avgScore = avg(stu);
        let stuRank = rank(stu);

        console.log(`
            Ten: ${stu.name}
            Tuoi: ${stu.age}
            DTB: ${avgScore}
            Xep loai: ${stuRank}
            `);
        
    })
}
// b3: goi ham, ktra
addStudent({
    name: "Nguyen van A",
    age: 20,
    subjects: [
        { subjectName: "Math", score: "A" },
        { subjectName: "Eng", score: "C" }
    ]
});
addStudent({
    name: "Nguyen van B",
    age: 10,
    subjects: [
        { subjectName: "Math", score: 10 },
        { subjectName: "Eng", score: 8 }
    ]
});

students.forEach
showInfo();

