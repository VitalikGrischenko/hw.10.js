const findLongestWord = function (string) {
    const words = string.split(' ');
    let longestWord = '';
  
    for (let i = 0; i < words.length; i += 1) {
      const currentWord = words[i];
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
    }
  
    return longestWord;
  };
  

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  
  console.log(findLongestWord('Google do a roll'));
  
  console.log(findLongestWord('May the force be with you'));
  