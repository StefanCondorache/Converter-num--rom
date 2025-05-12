import { Sute } from './Hundred.js';
import { Zeci } from './Dozen.js';
export class Mie extends Sute {
    mieS;
    constructor(num) {
        const partR = num.slice(num.length - 3, num.length);
        const partL = "" + Number(num.slice(0, num.length - 3));
        super(partR);
        if (partL.length == 1) {
            if ( partL == '0' )
                this.mieS = "";
            else if (partL == '1')
                this.mieS = "o mie ";
            else if (partL == '2')
                this.mieS = "doua mii ";
            else
                this.mieS = this.dict1[partL] + " mii ";
        }
        else if (partL.length == 2) {
            const num = new Zeci(partL);
            this.mieS = num.getNum();
        }
        else {
            const num = new Sute(partL);
            this.mieS = num.getNum();
        }
        if ( !(partL in this.dict1) ){
            ((this.mieS.includes("sprezece" ) ||  this.mieS.includes("zece"))) ? this.mieS += " mii " : this.mieS += " de mii ";
        }
        
    }
    getNum() {
        return this.mieS + super.getNum();
    }
}
