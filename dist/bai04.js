"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkNumber = (num) => {
    if (typeof num === "number") {
        num % 2 === 0 ? console.log("Day la so chan") : console.log("Day la so le");
    }
    else if (typeof num === "string") {
        console.log(num.split("").length + " ki tu");
    }
    else {
        console.log("Kieu du lieu khong hop le");
    }
};
checkNumber(3);
checkNumber(10);
checkNumber("demo123");
//# sourceMappingURL=bai04.js.map