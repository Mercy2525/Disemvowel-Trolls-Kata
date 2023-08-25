//SOLUTION 1

function disemvowel(str) {
     // Array of vowels in both lowercase and uppercase.
 vowels=['a','e','i','o','u','A','E','I','O','U']

    // Split the input string into an array of characters.
const splittedStr=str.split("")

    // Filter out characters that are vowels using the filter() method.
const filteredStr= splittedStr.filter((character)=>{
    return !vowels.includes(character)
  })
  
  // Join the filtered characters back together into a string and return it.
return filteredStr.join('')
}


// SOLUTION 2

// The replace() method replaces all vowels with an empty string (''), removing them.
// This returns a new string with vowels removed.

function disemvowel(str) {
  // Use regular expression to remove vowels (case-insensitive)
  return str.replace(/[aeiouAEIOU]/g, '');
}