export class Cifra {
    dict1 = {
        '' : '',
        '0': '',
        '1': 'unu',
        '2': 'doi',
        '3': 'trei',
        '4': 'patru',
        '5': 'cinci',
        '6': 'sase',
        '7': 'sapte',
        '8': 'opt',
        '9': 'noua',
    };
    numS;
    constructor(num) {
        this.numS = this.dict1[num];
    }
    getNum() {
        return this.numS;
    }
}
