function inverserMots(phrase) {
	let truc = "";
	let result = phrase.split(" ");

	for (let i = result.length - 1; i >= 0; i--) {
		const el = result[i];

		if (i != result.length - 1) {
			truc += " ";
		}

		truc += el;
	}
	return truc;
}

console.log(inverserMots("Bonjour tout le monde")); // Résultat attendu : "monde le tout Bonjour"
