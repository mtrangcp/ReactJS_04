"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let products = [];
let pro1 = {
    id: "EMD01",
    name: "Ao so mi nam",
    price: 300000,
    category: {
        id: "CAT01",
        name: "Thoi trang nam"
    },
    discount: 20
};
let pro2 = {
    id: "EMD02",
    name: "Ao so mi nu",
    price: 1560000,
    category: {
        id: "CAT02",
        name: "Thoi trang nu"
    }
};
let pro3 = {
    id: "EMD03",
    name: "Ao phong",
    price: 670000,
    category: {
        id: "CAT01",
        name: "Thoi trang nam"
    },
    discount: 40
};
products.push(pro1);
products.push(pro2);
products.push(pro3);
const checkPrice = (product) => {
    if ("discount" in product)
        return product.price - (product.price * product.discount / 100);
    else
        return product.price;
};
const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
};
const printProductInfo = (product) => {
    console.log(`
        Ten: ${product.name}
        Gia goc: ${formatVND(product.price)}
        Gia sau giam: ${formatVND(checkPrice(product))}
        Danh muc: ${product.category.name}
        `);
};
products.forEach(el => printProductInfo(el));
//# sourceMappingURL=bai06.js.map