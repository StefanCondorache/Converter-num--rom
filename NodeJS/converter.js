/* 
    to run the code:
    1) Find the file location
    2) Run the file in the terminal using the command: node /path/converter.js <YourNumber>
*/

import { Cifra, Zeci, Sute, Mie, Million } from './Classes/gather.js'

const convert = function(number){

    if( number == '0' ) return "zero";

    if( number.includes(".") ){
        let intPart = number.split(".")[0];
        let decPart = number.split(".")[1];
        
        return convert(intPart) + " virgula " + convert(decPart);
    }
    else{

        switch( number.length )
        {
            case 1:
                return new Cifra(number).getNum();
            case 2:
                return new Zeci(number).getNum();
            case 3:
                return new Sute(number).getNum();
            case 4:
            case 5:
            case 6: {
                return  new Mie(number).getNum();
            }
            case 7: 
            case 8:
            case 9:{
                return new Million(number).getNum();
            }
            default:
                console.log("Number too large");
        }
    }
    
}

// Get the number from the command-line arguments
const inputNumber = process.argv[2]; // The third argument is the input number

if (!inputNumber || isNaN(Number(inputNumber))) {
    console.log("Please provide a valid number as an argument. range: 0 - 999.999.999");
} else {
    console.log("Converted number : ", convert(inputNumber));
}




