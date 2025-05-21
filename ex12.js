function longueursMots(mots) {
    let array = []
	for (let i = 0; i < mots.length; i++) {
        const element = mots[i].length;
        array.push(element);
    }
    return array;
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]
