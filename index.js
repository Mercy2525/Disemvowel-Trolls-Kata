


// function disemvowel(str) {
//  vowels=['a','e','i','o','u','A','E','I','O','U']
   
//   const splittedStr=str.split("")
//   const filteredStr= splittedStr.filter((character)=>{
//     return !vowels.includes(character)
    
//   })
  
// return filteredStr.join('')

// }

function disemvowel(str) {
  // Use regular expression to remove vowels (case-insensitive)
  return str.replace(/[aeiouAEIOU]/g, '');
}