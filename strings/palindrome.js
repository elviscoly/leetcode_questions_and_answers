/*
Given a string determine if it is a palindrome, considering only 
alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.
Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input "race a car"
Output: false

Valid palindrome

- Instead of thinking of palindromes as words read the same backwards, think of 
  them as word where each half mirrors each other.
  This mirror concept works for words with both even and odd letters.

- Sanitize input string by removing non alphanumeric characters
  and lower casing it.
  create a left and right pointer, initially at start and end of input string.

  While Left less than right
    if character at Left and Right Pointer are not equal, return false

  Return true

*/

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W_]/g, '');

  let left = 0;
  let right = s.length - 1;

  while(left < right) {
    if(s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true
}


console.log(isPalindrome('A man, a plan, a canal: Panama'))