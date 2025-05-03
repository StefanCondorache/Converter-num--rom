import { Mie } from './Thousand.js';
import { Sute } from './Hundred.js';
import { Zeci } from './Dozen.js';
export class Million extends Mie {
    milS;
    constructor(num) {
        const partL = "" + Number(num.slice(0, num.length - 6));
        const partR = num.slice(num.length - 6, num.length);
        super(partR);
        if (partL.length == 1) {
            if (partL == '1')
                this.milS = "un milion ";
            else if (partL == '2')
                this.milS = "doua milioane ";
            else
                this.milS = this.dict1[partL] + " milioane ";
        }
        else if (partL.length == 2) {
            const num = new Zeci(partL);
            this.milS = num.getNum();
        }
        else {
            const num = new Sute(partL);
            this.milS = num.getNum();
        }
        if ( !(partL in this.dict1) ){
            ((this.milS.includes("sprezece" ) ||  this.milS.includes("zece"))) ? this.milS += " milioane " : this.milS += " de milioane ";
        }
    }
    getNum() {
        return this.milS + super.getNum();
    }
}
