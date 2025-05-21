function genererDescriptions(tabobj) {
    let array = [];
	for (let i = 0; i < tabobj.length; i++) {
        const element = tabobj[i];
        array.push(`${element.nom} a ${element.age} ans.`)
    }
    return array
}
console.log(
	genererDescriptions([
		{ nom: "Alice", age: 25 },
		{ nom: "Bob", age: 30 },
	])
);
// Résultat attendu : ["Alice a 25 ans.", "Bob a 30 ans."]
