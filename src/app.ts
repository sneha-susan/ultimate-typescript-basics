const pizzas = [{
    name : 'Pepporoni', toppings: ['pepporoni']
}];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase()) // implicit return function

console.log(mappedPizzas);

const pizza ={
    name : 'Blazing Inferno',
    getName : ()=> pizza.name
}

console.log(pizza.getName())