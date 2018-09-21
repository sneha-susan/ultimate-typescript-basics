let sumOrder : (price: number, quantity:number) => number;

sumOrder = (x , y) : number => x * y;

const sum = sumOrder(25, 2);

console.log(`Total sum: ${sum}`);
