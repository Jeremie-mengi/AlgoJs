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

function splitPairs(str) {
    let  result = []

    // Boucle pour parcourir la chaîne par étapes de 2 caractères
    for (let i=0;i<str.length;i+=2){ 
  // Si le caractère suivant existe, on prend deux caractères 
  if (i+1 < str.length) {
    result.push(str[i]+str[i+1]);
  }  
  else{
    result.push(str[i]+'_');
  }
    }
    return result
}
console.log(splitPairs("123456789"));

// 5. Écrivez une fonction qui prend une chaîne 
// d'un ou plusieurs mots et renvoie la même chaîne, 
// mais avec tous les mots qui ont cinq lettres 
// ou plus inversés (tout comme le nom de ce Kata). 
// Les chaînes transmises seront constituées uniquement 
// de lettres et d'espaces. Les espaces ne seront inclus 
// que lorsque plusieurs mots sont présents.

// Exemples :

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"
function InverseMot(chaine) {
  // Séparer la chaîne en mots
        return  chaine.split(' ')
  // Inverser les mots de 5 lettres ou plus
  .map(word=>word.length>= 5 ? word.split('').reverse().join(''):word)
  .join(' ')
}
console.log(InverseMot("This is another test"));

// 6.Ecrire une fonction qui prend une chaîne et renvoie une nouvelle 
// chaîne avec toutes les voyelles supprimées.
function RemoveVoyel(str) {
  return str.replace(/[aeiouyAEIOUY]/g,'')
}
console.log(RemoveVoyel("Trolls are bad"));



