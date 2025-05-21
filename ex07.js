function isDivisibleBy3And5(num) {
	if (num % 3 === 0 && num % 5 === 0) {
		return true;
	} else {
		return false;
	}
}
console.log(isDivisibleBy3And5(15))
console.log(isDivisibleBy3And5(24))