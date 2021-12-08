

function my_parseInt(string){
    let index = "";
    let mySlice = '';
 
    
      if(typeof string !== "number" && typeof string !== "string"){
               return NaN
         }else if(typeof string === "string"){
               index = string.indexOf(".");
               mySlice = string.slice(0,index);
              return +mySlice
           for(let i = 0; i < string.length; i++){
 
             if(typeof string[0] === "string"){
               return +string
             }else if( typeof string === "string" && typeof string ==="number" && string[0] === "0" && string[1] === "x" ){
                   return +string
             }else if(typeof string === "string" && typeof string ==="number" && string[0] === "0" && string[1] === 'b'){
                   return +string
             }else if(typeof string === "string" && typeof string ==="number" && string[0] === "0" && string[1] === 'x' && string[2] === "f"){
                 return +string
             }
           } 
           
         }else {
           return +string
         }
               
     if(typeof string !== isNaN()){
     return NaN
   }
   
 }
 
 console.log(my_parseInt(0x771));
 console.log(my_parseInt(123+123))
 console.log(my_parseInt("123.123"))
 console.log(my_parseInt(0xf+0165));
 console.log(my_parseInt("123"+"123"));
 console.log(my_parseInt(null));
 console.log(my_parseInt(NaN));
 console.log(my_parseInt(0b1010));
 console.log(my_parseInt("a123"));
 console.log(my_parseInt("123a"));
 console.log(my_parseInt(" 123 "));
 
 
 
 
 