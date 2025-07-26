console.log(4 > 3 && 10 < 12);       
console.log(4 > 3 && 10 > 12);       
console.log(4 > 3 || 10 < 12);       
console.log(4 > 3 || 10 > 12);      
console.log(!(4 > 3));               
console.log(!(4 < 3));               
console.log(!false);                
console.log(!(4 > 3 && 10 < 12));    
console.log(!(4 > 3 && 10 > 12));    
console.log(!(4 === '4'));          

// Check if 'on' is in both 'dragon' and 'python'
let hasOnInBoth = 'dragon'.includes('on') && 'python'.includes('on');
console.log("No 'on' in both dragon and python:", !hasOnInBoth);
