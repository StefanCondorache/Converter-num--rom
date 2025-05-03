import { Zeci } from './Dozen.js';
export class Sute extends Zeci {
    hundredsS;
    constructor(num) {
        const partL = num[0];
        const partR = num.slice(1, 3);
        super(partR);

        if( partL == '0' ){
            this.hundredsS = ""
        }
        else if (partL == '1') {
            this.hundredsS = this.dict2[partL + 'v2'] + " suta ";
        }
        else if (partL == '2') {
            this.hundredsS = this.dict2[partL + 'v2'] + " sute ";
        }
        else {
            this.hundredsS = this.dict1[partL] + " sute ";
        }
    }
    getNum() {
        return this.hundredsS + super.getNum();
    }
}
