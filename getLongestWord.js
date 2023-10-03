const quote = 'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers';
const quote2 = 'We cannot solve problems with the kind of thinking we employed when we came up with them';

const vowelsOnly = (word) => {
  return word.replaceAll(/[^aeiouAEIOU]/g, '')
};  

// need to remove all non english characters
// needs to return longest word
// if two words tie for longest length, go for the word with the most vowels
const getLongestWord = (quote) => {
  let wordArr = quote.replaceAll(/[^a-zA-Z\s]/g, '').split(' ');
  
  return wordArr.reduce((a, b) => {
    if (a.length > b.length) {
      return a;
    } else if (b.length > a.length) {
      return b;
    } else {
      return vowelsOnly(a).length > vowelsOnly(b).length ? a : b;
    }
  }, wordArr[0]);
};

console.log(getLongestWord(quote));
console.log(getLongestWord(quote2));
