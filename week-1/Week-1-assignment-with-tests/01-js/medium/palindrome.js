/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/



function isPalindrome(str) {
  
  let str1 = str.toLowerCase()
  let arr = str1.split("")

  let i = 0;
  let j = str.length - 1;
  
  while(i < j){
    if(arr[i] > 'a' && arr[j])arr[i] === arr[j]){
      i++;
      j--;
    }else{
      return false;
    }
  }

  return true;
  
}

module.exports = isPalindrome;
