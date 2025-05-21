function isSumEven(a, b) {
	let result = a + b;
	if (result % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isSumEven(1, 3));
console.log(isSumEven(1, 0));
