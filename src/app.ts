let selectedTopping : string = 'pepperoni';

function selectTopping(topping: string): void{
    selectedTopping = topping; // impure function
}

selectTopping('bacon');

console.log(selectedTopping)