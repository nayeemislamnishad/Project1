// Example userData
const userData = "abcdefg";

// A mapping array for conversion (you can expand this with more symbols and signs)
const conversionTable = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

// Obfuscation function
function obfuscateText(text) {
  let result = "";
  
  // Loop through each character in the input text
  for (let i = 0; i < text.length; i++) {
    // Convert the character to its ASCII code
    let charCode = text.charCodeAt(i);
    
    // Generate an index using the ASCII code and some arbitrary operations
    let index = (charCode * 7 + 3) % conversionTable.length;
    
    // Append the corresponding symbol from the conversion table to the result
    result += conversionTable[index];
  }
  
  return result;
}

// Example usage
const obfuscatedText = obfuscateText(userData);
console.log(obfuscatedText);  // Output will be a mixture of symbols
