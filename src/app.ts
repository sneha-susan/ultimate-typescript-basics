
//destructuring object

const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni']
}

function order({name: pizzaName, toppings: pizzaToppings}: any){
    return {pizzaName, pizzaToppings}
}

const {pizzaName} = order(pizza);


//destructuring arrays

const toppings = ['pepperoni', 'chilli', 'bacon']

const [ first, second, third ] =  toppings;

console.log(first, second, third);

function logToppings([first, second, third] : any){
    console.log(first, second, third)
}

logToppings(toppings);