function calculerPrix(price) {
	if (price > 100) {
		return price * 0.9;
	} else {
		return price;
	}
}
console.log(calculerPrix(120)); // Résultat attendu : 108
console.log(calculerPrix(80)); // Résultat attendu : 80
