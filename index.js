// 1. Ecrire une fonction qui convertit un nombre decimal en binaire 

let transBits = function (n) {
    return n.toString(2)
}
console.log(transBits(5));


// 2.Écrivez une fonction qui prend un entier en entrée et renvoie le nombre de bits égaux à un 
// dans la représentation binaire de ce nombre. Vous pouvez garantir que l'entrée n'est pas négative.

// Exemple : La représentation binaire de 1234est 10011010010, donc la fonction doit renvoyer 5dans ce cas

let countBits = function (n) {
    return n.toString(2).split('0').join('').length;
}

console.log(countBits(100));


// 3. Ecrire une fonction qui convertit un nombre decimal en Hexadecimal 
let transHexadecimal = function (n) {
    return n.toString(16)
}
console.log(transHexadecimal(5));

// 4. Complétez la solution de manière à diviser la chaîne en paires de deux caractères. 
// Si la chaîne contient un nombre impair de caractères, 
// remplacez le deuxième caractère manquant de la dernière paire 
// par un trait de soulignement ('_').

// Exemples :

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

