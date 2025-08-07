// onion + alias
type scoreType = number | string;
type numArr = scoreType[]; // mang chua diem so, trong do diem co the la so hoac chuoi

let numbers: numArr = [1, 2, 3]

//
type Student = {
    id: number,
    name: string,
    score?: scoreType
}

type User = {
    userName: string
}
type StudentUser = Student & User;

let student: Student = {
    id: 1,
    name: "Hoan stupid",
    score: 1.5
}

// intersection - lay phan giao
type num = number;
type str = string;
type numAndAtr = num & str; // never - dung khi khai bao kieu du lieu nhiu hon 1

let user: StudentUser = {
    userName: "test",
    id: 1,
    name: "Hoan ngu"
}

// interface
interface Teacher {
    id: number,
    name: string,
    score?: scoreType
}

// type guard - kiem tra kieu du lieu
// user-defined type guard: ham boolean

