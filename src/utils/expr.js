import Operand from './operand';

export default class Expr {
    constructor(operator, a, b) {
	this.operator = operator || null;
	this.a = new Operand(a);
	this.b = new Operand(b);
	console.log(this.a.val);
	console.log(this._a.val);

    }

    static pushDigit(current_val, digit) {
	let new_number = current_val.toString() + digit.toString();
	return +new_number;
    }

    get a() { return this._a; }
    
    set a(digit) {
	if (this.a == null || digit == null) {
	    this._a = digit;
	}
	else if (this.a.toString().length >= 10) {
	    return this.a;
	}
	else {
	    this._a = Expr.pushDigit(this.a, digit);
	}
    }
    
    get b() { return this._b; }
    
    set b(digit) {
	if (this.b == null || digit == null) {
	    this._b = digit;
	}
	else if (this.b.toString().length >= 10) {
	    return this.b;
	}
	else {
	    this._b = Expr.pushDigit(this.b, digit);
	}
    }

    eval() {
	const a = this.a;
	const b = this.b;
	let result = null;
	
	switch(this.operator) {
	case '+':
	    result =  a + b;
	    break;
	case '-':
	    result =  a - b;
	    break;
	case '*':
	    result =  a * b;
	    break;
	case '/':
	    result =  a / b;
	    break;
	default:
	    break;
	}

	result.toPrecision(7);
	if (result.toString().length > 7) {
	    result = result.toExponential();
        }
	return result;
    }
}
