const fruits = ['Maçã', 'Laranja', 'Mamão'];

const [f1, f2, f3] = fruits; // Desestruturação de array

console.log(f3); // 'Maçã'


const productdetails = {
    name: "Mouse",
    price: 29.99,
    category: "Eletrônicos",
    color: "Preto",
}

const {name: productName, price, category: productCategory, color} = productdetails; // Desestruturação de objeto

console.log(`O nome do produto é: ${productName}, custa R$${price}, pertence a categoria
    ${productCategory} e é da cor ${color}`); // 'O nome do produto é: Mouse'