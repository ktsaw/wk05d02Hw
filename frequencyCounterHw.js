// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function converter(str) {
  const obj = {};
  const string = str.replace(/[^\w]/g,'').toLowerCase();

  for (let char of string) {
    obj[char]= obj[char] ++ || 1
    
  }
  return obj;
}
 function anagrams(strA, strB) {
  const result1 = converter(strA);
  const result2 = converter(strB);

  if (Object.keys(result1).length !== Object.keys(result2).length) {
    return false;
  }

  for (let char in result1) {
    if (result1[char] !== result2[char]) {
      return false;
    }
  }

  return true;
}

console.log(anagrams('rail safety', 'fairy tales')) 
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')) 
console.log(anagrams('Hi there', 'Bye there'))