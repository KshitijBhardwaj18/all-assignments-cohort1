/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  let arr1 =  str1.toLowerCase().split("");
  let arr2 = str2.toLowerCase().split("");

 arr1 = arr1.sort().join();
 arr2 =  arr2.sort().join();

 return arr1 === arr2;

  

}

module.exports = isAnagram;
