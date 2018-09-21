type Size  = 'small' | 'medium' | 'large';
type Callback = (size:Size) => void;

let pizzaSize : Size= 'small'  //assigned default value of pizzaSize as small

const selectSize : Callback = (x ) =>{
    pizzaSize = x;
};

selectSize('small')