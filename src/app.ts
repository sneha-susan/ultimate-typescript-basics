const pizza: number = 2;

function offerDiscount(order: number): boolean{
    return order>3;
}

if(offerDiscount(pizza)){
    console.log(`You're entitled to a discount!`);
} else {
    console.log(`Order more than 3 to get a discount!`);
}
