function findLargestNDigitNumber(n) {
  let largestNDigitNumber = "";
  let i = 0;
  while (i < n) {
    largestNDigitNumber += 9;
    i++;
  }
  return Number(largestNDigitNumber);
}

function largestPalindromeProduct(n) {
  let largestNDigitNumber = findLargestNDigitNumber(n);
  let largestPossibleNumber = largestNDigitNumber ** 2;
  let firstHalfOfLargestPossibleNumber = Math.floor(largestPossibleNumber / 10 ** n) - 1;
  let palindrome;
  let arrayOfPalindrome = [];
  let result = 0, status;

  while (firstHalfOfLargestPossibleNumber >= 10 ** (n - 1)) {
    palindrome = firstHalfOfLargestPossibleNumber + (firstHalfOfLargestPossibleNumber + "").split('').reverse().join('');
    arrayOfPalindrome.push(Number(palindrome));
    firstHalfOfLargestPossibleNumber--;
  }
  while (largestNDigitNumber >= 10 ** (n - 1)) {
    for (let i = 0; i < arrayOfPalindrome.length; i++) {
      if (arrayOfPalindrome[i] % largestNDigitNumber == 0 && arrayOfPalindrome[i] / largestNDigitNumber < 10 ** n) {

        if (result < arrayOfPalindrome[i]) {
          result = arrayOfPalindrome[i];
        }

      }
    }
    largestNDigitNumber--;
  }
  return result;
}
