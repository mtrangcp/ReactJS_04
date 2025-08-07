interface Product{
    readonly id: string,
    name: string,
    price: number
}
interface OrderItem{
    product: Product,
    quantity: number
}
interface Order {
    orderId: string,
    customerName: string,
    items: OrderItem[],
    note?: string
}

let order: Order = {
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
}

const formatVND = (amount: number): string =>{
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
}

const calculateOrderTotal = (order: Order): number => {
    let total: number = 0;
    let listItem = order.items;
    listItem.forEach((el) => {
        total += el.product.price * el.quantity;
    })

    return total;
}

const printProduct = (order: Order): void => {
    let listItem = order.items;
    listItem.forEach((el) => {
        console.log(` - ${el.product.name} x ${el.quantity} -> ${formatVND(el.product.price * el.quantity)}
            `);
    });
}

const printOrder = (order: Order): void => {
    console.log(`Don hang: ${order.orderId}`);
    console.log(`Khach hang: ${order.customerName}`);
    console.log(`San pham:`);
    printProduct(order); 
    console.log(`Tong cong: ${formatVND(calculateOrderTotal(order))}`);
    if (order.note) {
        console.log(`Ghi chu: ${order.note}`);
    }
}

printOrder(order);
