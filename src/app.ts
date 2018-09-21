let pizza: {name : string, price : number, getName(): string} = {
    name: 'Plain Old Pepperoni',
    price: 25,
    getName(){
        return pizza.name;
    }
}

console.log(pizza.getName());