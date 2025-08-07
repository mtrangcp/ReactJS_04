interface Product {
    readonly id: string,
    name: string,
    price: number
}
interface OrderItem {
    product: Product,
    quantity: number,
    note?: string 
}
interface Order{
    orderId: string,
    customer: string,
    items: OrderItem[],
    deliveryAddress: string,
    isPaid: boolean
}
interface Invoice {
    invoiceId: string,
    orders: Order[],
    createdAt: Date
}

let invoice: Invoice = {
    invoiceId: "#INV001",
    orders: [
        {
            orderId: "#ORD001",
            customer: "Nguyen Van A",
            items: [
                {
                    product: {
                        id: "#PRO001",
                        name: "Ao so mi",
                        price: 250000
                    },
                    quantity: 2
                },
                {
                    product: {
                        id: "#PRO002",
                        name: "Quan jean",
                        price: 400000
                    },
                    quantity: 1,
                    note: "Size L, mau do"
                }
            ],
            deliveryAddress: "Ha Noi",
            isPaid: true
        },
        {
            orderId: "#ORD002",
            customer: "Tran Van B",
            items: [
                {
                    product: {
                        id: "#PRO003",
                        name: "Vay hoa",
                        price: 700000
                    },
                    quantity: 1,
                    note: "Size XL, mau den"
                }
            ],
            deliveryAddress: "Ho Chi Minh",
            isPaid: false
        },
    ],
    createdAt: new Date()
}

const formatVND = (amount: number): string =>{
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
}

const calculateInvoiceTotal = (invoice: Invoice): number => {
    let total = 0;
    invoice.orders.forEach((el) => {
        el.items.forEach((item) => {
            total += item.product.price * item.quantity;
        });
    });
    return total;
}

const getUnpaidOrders = (invoice: Invoice): Order[] => {
    return invoice.orders.filter((el) => !el.isPaid);
}

const printfItem = (item: OrderItem): void => {
    console.log(`- ${item.product.name} x ${item.quantity} -> ${formatVND(item.product.price)} ${item.note? `(note: ${item.note})`: ``}`);   
}

const calculateOrderTotal = (order: Order): number => {
    let total = 0;
    order.items.forEach(el => {
        total += el.product.price * el.quantity;
    });
    return total;
}
    
const printfOrder = (order: Order): void => {
    console.log(`Don hang: ${order.orderId} - ${order.customer}`);
    order.items.forEach(el => {
        printfItem(el);
    })
    console.log(`Tong don: ${formatVND(calculateOrderTotal(order))}`);
    console.log(`Trang thai: ${order.isPaid ? "Da thanh toan \n" : "Chua thanh toan \n"}`);
}

const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const day = String(date.getDate()).padStart(2, "0");         
    return `${year}-${month}-${day}`;
};

const printInvoice = (invoice: Invoice): void => {
    console.log(`Hoa don: ${invoice.invoiceId} - Ngay tao: ${formatDate(invoice.createdAt)}
        -------------------------------------------`);
    invoice.orders.forEach(el => {
        printfOrder(el);
    });

    console.log(`>> Tong cong hoa don: ${formatVND(calculateInvoiceTotal(invoice))}`);
}

printInvoice(invoice);
console.log("\nList chua thanh toan: \n",getUnpaidOrders(invoice));

