/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    !!!!!!!!!!!!!   THIS IS DANGER ZONE     !!!!!!!!

    RUNNING THIS FILE WILL CAUSE A LOT OF OUTPUT
    WRITTEN TO THE OUTPUT.TXT FILE
    THE FILE WILL BE OVERWRITTEN EVERY TIME YOU RUN IT

    THE OUTPUT.TXT FILE WILL HAVE A LOT OF NUMBERS
    SO BE CAREFUL WHEN OPENING IT
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

import { Cifra, Zeci, Sute, Mie, Million } from './Classes/gather.js';
import fs from 'fs';


console.log(`
    !!!!!!!!!!!!!   THIS IS DANGER ZONE     !!!!!!!!

    RUNNING THIS FILE WILL CAUSE A LOT OF OUTPUT
    WRITTEN TO THE OUTPUT.TXT FILE
    THE FILE WILL BE OVERWRITTEN EVERY TIME YOU RUN IT

    THE OUTPUT.TXT FILE WILL HAVE A LOT OF NUMBERS
    SO BE CAREFUL WHEN OPENING IT

`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Are you sure you want to continue? (y/n) ', (answer) => {

    if (answer == 'n' || answer == 'no') rl.close();
    else{

        console.log("Hope you're patient")

        try{

        
            const filePath = './output.txt';
            fs.writeFileSync(filePath, '');

            for( let i = 1; i < 10; i++ ){
                let num = new Cifra("" + i)
                fs.appendFileSync(filePath, num.getNum() + "\n");
            }

            for( let i = 10; i < 100; i += 3 ){
                let num1 = new Zeci("" + i)
                let num2 = new Zeci("" + i+1)
                let num3 = new Zeci("" + i+2)
                let data = num1.getNum() + '\n' + num2.getNum() + '\n' + num3.getNum() + '\n'
                fs.appendFileSync(filePath, data);
            }

            for( let i = 100; i < 1_000; i += 10 ){
                let num1 = new Sute("" + i);
                let num2 = new Sute("" + i + 1);
                let num3 = new Sute("" + i + 2);
                let num4 = new Sute("" + i + 3);
                let num5 = new Sute("" + i + 4);
                let num6 = new Sute("" + i + 5);
                let num7 = new Sute("" + i + 6);
                let num8 = new Sute("" + i + 7);
                let num9 = new Sute("" + i + 8);
                let num10 = new Sute("" + (i + 9));

                let data = num1.getNum() + '\n' +
                           num2.getNum() + '\n' +
                           num3.getNum() + '\n' +
                           num4.getNum() + '\n' +
                           num5.getNum() + '\n' +
                           num6.getNum() + '\n' +
                           num7.getNum() + '\n' +
                           num8.getNum() + '\n' +
                           num9.getNum() + '\n'; +
                           num10.getNum() + '\n';

                fs.appendFileSync(filePath, data);
            }

            for( let i = 1_000; i < 1_000_000; i += 10){
                let num1 = new Mie("" + i);
                let num2 = new Mie("" + (i + 1));
                let num3 = new Mie("" + (i + 2));
                let num4 = new Mie("" + (i + 3));
                let num5 = new Mie("" + (i + 4));
                let num6 = new Mie("" + (i + 5));
                let num7 = new Mie("" + (i + 6));
                let num8 = new Mie("" + (i + 7));
                let num9 = new Mie("" + (i + 8));
                let num10 = new Mie("" + (i + 9));

                let data = num1.getNum() + '\n' +
                           num2.getNum() + '\n' +
                           num3.getNum() + '\n' +
                           num4.getNum() + '\n' +
                           num5.getNum() + '\n' +
                           num6.getNum() + '\n' +
                           num7.getNum() + '\n' +
                           num8.getNum() + '\n' +
                           num9.getNum() + '\n'; +
                           num10.getNum() + '\n';

                fs.appendFileSync(filePath, data);
            }

            for ( let i = 1_000_000; i < 1_000_000_000; i += 10 ){
                let num1 = new Million("" + i);
                let num2 = new Million("" + (i + 1));
                let num3 = new Million("" + (i + 2));
                let num4 = new Million("" + (i + 3));
                let num5 = new Million("" + (i + 4));
                let num6 = new Million("" + (i + 5));
                let num7 = new Million("" + (i + 6));
                let num8 = new Million("" + (i + 7));
                let num9 = new Million("" + (i + 8));
                let num10 = new Million("" + (i + 9));
                
                let data = num1.getNum() + '\n' +
                           num2.getNum() + '\n' +
                           num3.getNum() + '\n' +
                           num4.getNum() + '\n' +
                           num5.getNum() + '\n' +
                           num6.getNum() + '\n' +
                           num7.getNum() + '\n' +
                           num8.getNum() + '\n' +
                           num9.getNum() + '\n'; +
                           num10.getNum() + '\n';

                fs.appendFileSync(filePath, data);
            }
        }finally{
            console.log("\nTask completed!");
            rl.close();
        }   
    }   
}); 