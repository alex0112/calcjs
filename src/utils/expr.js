export default class Expr {
    constructor() {
	this.operand = null;
	this.a = null;
	this.b = null;
    }

    static pushDigit(current_val, digit) {
	let new_number = current_val.toString + digit.toString();
	return +new_number;
    }
    
    get a() { return this._a; }
    
    set a(digit) {
	if (this.a == null) {
	    this._a = digit;
	}
	else {
	    this._a = Expr.pushDigit(this.a, digit);
	}
    }

    get b() { return this._b; }
    
    set b(digit) {
	if (this.b == null) {
	    this._b = digit;
	}
	else {
	    this._b = Expr.pushDigit(this.b, digit);
	}
    }

    eval() {
	const a = this.a;
	const b = this.b;

	console.log(a, b);
	
	switch(this.operand) {
	case '+':
	    return a + b;
	case '-':
	    return a - b;
	case '*':
	    return a * b;
	case '/':
	    return a / b;
	default:
	    throw "Unrecognized operand.";
	}
    }
}
