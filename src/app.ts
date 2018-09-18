const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number{
    return cost + 1.5*toppings;
}

const cost = calculatePrice(pizzaCost, pizzaToppings);