function countVowels(text) {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u" || text[i] == "y") {
            counter++;
        }
    }
    return counter
}

// Exemple de test
console.log(countVowels("javascript")); // Retour attendu: 3