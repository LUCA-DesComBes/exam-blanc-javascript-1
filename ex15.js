function filtrerProduitsEnPromo(tabobj) {
    let array = [];
    for (let i = 0; i < tabobj.length; i++) {
        if (tabobj[i].promo == true) {
            array.push(tabobj[i])
        }
    }
    return array;
}

console.log(filtrerProduitsEnPromo([
    {nom: "Télévision", prix: 500, promo: true},
    {nom: "Casque audio", prix: 100, promo: false},
    {nom: "Smartphone", prix: 700, promo: true}
  ]));
  // Résultat attendu : [{nom: "Télévision", prix: 500, promo: true}, {nom: "Smartphone", prix: 700, promo: true}]