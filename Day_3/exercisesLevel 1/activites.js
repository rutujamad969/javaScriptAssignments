const now = new Date();

// 1. What is the year today?
console.log("Year:", now.getFullYear()); // e.g., 2025

// 2. What is the month today as a number? (0 = Jan, 11 = Dec)
console.log("Month:", now.getMonth() + 1); // +1 to get 1-based month

// 3. What is the date today?
console.log("Date:", now.getDate());

// 4. What is the day today as a number? (0 = Sunday, 6 = Saturday)
console.log("Day:", now.getDay());

// 5. What is the hours now?
console.log("Hours:", now.getHours());

// 6. What is the minutes now?
console.log("Minutes:", now.getMinutes());

// 7. Seconds since Jan 1, 1970 (Unix Epoch)
console.log("Seconds since 1970:", Math.floor(now.getTime() / 1000));
