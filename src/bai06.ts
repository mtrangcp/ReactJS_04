interface Product {
    id: string,
    name: string,
    price: number,
    category: {
        id: string,
        name: string
    },
    discount?: number
}

let products: Product[] = [];

let pro1: Product = {
    id: "EMD01",
    name: "Ao so mi nam",
    price: 300000,
    category: {
        id: "CAT01",
        name: "Thoi trang nam"
    },
    discount: 20
}
let pro2: Product = {
    id: "EMD02",
    name: "Ao so mi nu",
    price: 1560000,
    category: {
        id: "CAT02",
        name: "Thoi trang nu"
    }
}
let pro3: Product = {
    id: "EMD03",
    name: "Ao phong",
    price: 670000,
    category: {
        id: "CAT01",
        name: "Thoi trang nam"
    },
    discount: 40
}

products.push(pro1);
products.push(pro2);
products.push(pro3);

const checkPrice = (product: Product): number => {
    if ("discount" in product) return product.price - (product.price * product.discount / 100);
    else return product.price;
}

const formatVND = (amount: number): string =>{
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
}

const printProductInfo = (product: Product): void => {
    console.log(`
        Ten: ${product.name}
        Gia goc: ${formatVND(product.price)}
        Gia sau giam: ${formatVND(checkPrice(product))}
        Danh muc: ${product.category.name}
        `);
}

products.forEach(el =>  printProductInfo(el))