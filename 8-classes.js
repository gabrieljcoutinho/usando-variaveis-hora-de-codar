class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount){
        return this.price * ((100 * discount) / 100);
    }
}

const shirt = new Product('Camisa gola V', 20);

console.log(shirt.name); // Camisa gola V

console.log(shirt.productWithDiscount(50));

const tenis = new Product('Tenis', 100);
console.log(tenis.productWithDiscount(50)); // 50

//9 herança
class productWithAtrributes extends Product {
    constructor(name, price, color){
        super(name, price);
        this.color = color;
    }

showColor(){
    console.log('As cores são: ');
    this.color.forEach((color) => {
        console.log(color);
    })
}
}


const hat = new productWithAtrributes('Chapeu', 50, ['azul', 'preto', 'branco']);

console.log(hat.name); // Chapeu
console.log(hat.productWithDiscount(50)); // 25
console.log(hat.color); // ['azul', 'preto', 'branco']