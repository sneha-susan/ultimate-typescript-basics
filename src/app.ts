class Sizes{
    constructor(public sizes: string[]){}

    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }

    get availableSizes(){
        return this.sizes;
    }
}

const sizes = new Sizes(['small', 'medium']);
console.log(sizes.availableSizes) //invoke getter
sizes.availableSizes = ['medium', 'large'];   //invoke the setter
console.log(sizes.availableSizes) //invoke getter after the change

class Pizza {
     public toppings : string[] = [];

     constructor(readonly name: string){   }

     public addTopping(topping: string){
         this.toppings.push(topping);
     }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');
console.log(pizza.name);   

console.log(pizza);   