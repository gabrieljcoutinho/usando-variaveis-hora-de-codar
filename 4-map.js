const products =[
    {name: 'Camisa', preco: 10.0, category: 'Roupa'},
    {name: 'Chaleira',  preco: 20.0, category: 'Eletro'},
    {name: 'Fogão',  preco: 30.0, category: 'Eletro'},
    {name: 'Calça', preco: 40.0, category: 'Roupa'},
]

products.map((products) => {
    if(products.category === 'Roupa'){
        products.onSale = true
    }
})

console.log(products)