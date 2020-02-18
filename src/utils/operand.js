export default class Operand {
    constructor(val) {
	this.val = val || null;
    }
        
    opposite () {
	return -this.val;
    }

    set_to_opposite() {
	this.val = -this.val;
    }

    percent() {
	return this.val / 100;
    }

}
