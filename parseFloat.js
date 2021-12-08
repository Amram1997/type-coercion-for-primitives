// implemt parseFloat() method

function my_parseFloat(str_ing){
    if(typeof str_ing !=="string" && typeof str_ing !== "number"){
        return NaN
    } else if(typeof str_ing === "string"){
        for(let i = 0; i < str_ing.length; i++){
            if(typeof str_ing[0] === "string"){
                return +str_ing
            }else if(typeof str_ing === "string" && typeof str_ing === "number"){
                return +str_ing
            }
        }
    }else {
        return +str_ing
    }

    if(typeof str_ing === isNaN()){
        return NaN
    }

}
console.log(my_parseFloat())

console.log(my_parseFloat(0x771));
console.log(my_parseFloat(123+123))
console.log(my_parseFloat("123.123"))
console.log(my_parseFloat(0xf+0165));
console.log(my_parseFloat("123"+"123"));
console.log(my_parseFloat(null));
console.log(my_parseFloat(NaN));
console.log(my_parseFloat(0b1010));
console.log(my_parseFloat("a123"));
console.log(my_parseFloat("314e-2"));
console.log(my_parseFloat(" 123 "));


