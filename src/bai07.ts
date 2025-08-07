const checkNT =(num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if ( num % i === 0) return false
    }
    return true;
}

const regex = /[a-zA-Z]/;
const countLetter = (input: string): number => {
    let count = 0;
    for (let el of input) {
        if (regex.test(el)) count++;
    }
    return count;
}

const processInput = (input: string | number | boolean) => {
    if (typeof input === "string") {
        if (Number.isInteger(+input)) {
            input = +input;
            console.log("Binh phuong: ", Math.pow(input, 2));
            
        } else {
            console.log( countLetter(input) + " ki tu chu cai");
        }
        
    } else if (typeof input === "number") {
        checkNT(input) ? console.log("Là số nguyên tố") : console.log("Không phải số nguyên tố");
        
    }else if (typeof input === "boolean") {
        input ? console.log("Giá trị là true - tiến hành xử lý"): console.log("Giá trị là false - dừng xử lý");
       
    } else {
        console.log("Kieu du lieu khong hop le");
    }
}

processInput("123");
processInput("abc123!");
processInput(100);
processInput(97);
processInput(true);
processInput(false);