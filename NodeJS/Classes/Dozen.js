import { Cifra } from './Digit.js';
export class Zeci extends Cifra {
    dict2 = {
        '' : '',
        '0' : '',
        '1v2': 'o',
        '2v2': 'doua',
        '6v2': 'sai',
        '10': 'zece',
        '11': 'unsprezece',
        '14': 'paisprezece',
        '16': 'saisprezece',
    };
    tensS;
    constructor(num) {
        super('');
        if (num in this.dict2) {
            this.tensS = this.dict2[num];
        }
        else {
            const num1 = num[0];
            const num2 = num[1];
            this.numS = this.dict1[num2];

            if (num1 == '0' && (num2 != '0' || num2 == '0')) {
                this.tensS = "" + this.numS;
            }
            else if (num1 == '1') {
                this.tensS = this.dict1[num2] + "sprezece";
            }
            else {
                let part = (num1 + 'v2' in this.dict2) ? this.dict2[num1 + 'v2'] : this.dict1[num1];
                this.tensS = part + "zeci"
                this.tensS = (num2 != '0') ? this.tensS + " si " + this.numS : this.tensS;
            }
        }
    }
    getNum() {
        return this.tensS
    }
}
