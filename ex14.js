function extraireNoms(tabobj) {
	let array = [];
	for (let i = 0; i < tabobj.length; i++) {
		const element = tabobj[i];
		array.push(`${element.nom}`);
	}
	return array;
}
console.log(
	extraireNoms([
		{ nom: "Alice", age: 25 },
		{ nom: "Bob", age: 30 },
	])
); // Résultat attendu : ["Alice", "Bob"]
