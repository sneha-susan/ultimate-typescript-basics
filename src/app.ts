const coupon : string ='pizza25';

function normalizeString(code: string) : string{
    return code.toUpperCase();
}

const couponMessage : string = `Final coupon is ${normalizeString(coupon)}`;

console.log(couponMessage);