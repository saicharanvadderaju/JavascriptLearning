// Create a new Date object
const currentDate = new Date();

// Extract components of the current date
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Display the current date and time
console.log(`Current Date: ${year}-${month}-${day}`);
console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
