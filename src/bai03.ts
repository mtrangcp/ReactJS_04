interface Student {
    name: string,
    age: number,
    email: string
}

const showInfo = (stu: Student) => console.log(`Ten: ${stu.name}, tuoi: ${stu.age}, email: ${stu.email}`);

let stu: Student = {
    name: "Haibara",
    age: 6,
    email: "haibara4869@gmail.com"
}
showInfo(stu);