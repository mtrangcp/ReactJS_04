interface Person {
    name: string,
    age: number
}
interface Employee {
    employeeId: string,
    department: string
}
type StaffMember = Person & Employee;

let staff : StaffMember = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
}

const printStaffInfo = (staff: StaffMember): void => console.log(`Nhan vien: ${staff.name} (${staff.age}), Ma nhan vien: ${staff.employeeId} - Phong ${staff.department}`);

printStaffInfo(staff);
