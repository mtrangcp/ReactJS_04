const checkNumber = (num: number | string) => {
    if (typeof num === "number") {
        num % 2 === 0 ? console.log("Day la so chan") : console.log("Day la so le");
        
    } else if (typeof num === "string")  {
        console.log(num.split("").length + " ki tu");
    } else {
        console.log("Kieu du lieu khong hop le");
    }
}

checkNumber(3);
checkNumber(10);
checkNumber("demo123");