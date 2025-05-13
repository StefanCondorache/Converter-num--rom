/* 
    to run the code:
    1) Find the file location
    2) Run the file in the terminal using the command: node /path/converter.js <YourNumber>
*/

import { Cifra, Zeci, Sute, Mie, Million } from './Classes/gather.js'

function removeTrailingZeros(str) {
    return str.replace(/0+$/, '');
}

export const convert = function(number, type = "intreg"){

    if( number == '0' ) return "zero";

    if( number.includes(".") ){
        let intPart = number.split(".")[0];
        let decPart = number.split(".")[1];
        
        return convert(intPart) + " virgula " + convert(removeTrailingZeros(decPart), "zecimal");
    }
    else{
        
        let add = "";

        if( type == "zecimal" ){
            let mockNumber = String(Number(number));
            add = " zero".repeat(number.length - mockNumber.length) + " ";
            number = mockNumber;
        }

        switch( number.length )
        {
            case 1:
                return (add + new Cifra(number).getNum()).trimStart();
            case 2:
                return (add + new Zeci(number).getNum()).trimStart();
            case 3:
                return (add + new Sute(number).getNum()).trimStart();
            case 4:
            case 5:
            case 6: {
                return (add + new Mie(number).getNum()).trimStart();
            }
            case 7: 
            case 8:
            case 9: {
                return (add + new Million(number).getNum()).trimStart();
            }
            default:
                return "Number too large";
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




