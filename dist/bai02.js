"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arrScore = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let result = arrScore.reduce((sum, el) => sum + el, 0) / arrScore.length;
console.log("Diem trung binh: ", result.toFixed(2));
//# sourceMappingURL=bai02.js.map