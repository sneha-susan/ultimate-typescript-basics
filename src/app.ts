interface Pizza {
    name: string;
    sizes: string[];
    getAvailableSizes() : string[];
}

let pizza : Pizza;

type getAvailableSizes = () => string[]; 

function createPizza(name: string, sizes: string[]): Pizza{
    return{
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizza = createPizza('Pepperoni', ['small', 'medium'])
