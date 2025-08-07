"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let order = {
    orderId: "#ORD001",
    customerName: "Nguyen Van A",
    items: [
        {
            product: {
                id: "PRO001",
                name: "Ao so mi",
                price: 250000
            },
            quantity: 2
        },
        {
            product: {
                id: "PRO002",
                name: "Quan tay",
                price: 200000
            },
            quantity: 1
        }
    ],
    note: "Giao sau 18h"
};
const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
};
const calculateOrderTotal = (order) => {
    let total = 0;
    let listItem = order.items;
    listItem.forEach((el) => {
        total += el.product.price * el.quantity;
    });
    return total;
};
const printProduct = (order) => {
    let listItem = order.items;
    listItem.forEach((el) => {
        console.log(` - ${el.product.name} x ${el.quantity} -> ${formatVND(el.product.price * el.quantity)}
            `);
    });
};
const printOrder = (order) => {
    console.log(`Don hang: ${order.orderId}`);
    console.log(`Khach hang: ${order.customerName}`);
    console.log(`San pham:`);
    printProduct(order);
    console.log(`Tong cong: ${formatVND(calculateOrderTotal(order))}`);
    if (order.note) {
        console.log(`Ghi chu: ${order.note}`);
    }
};
printOrder(order);
//# sourceMappingURL=bai08.js.map