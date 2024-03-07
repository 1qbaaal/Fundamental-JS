let date1 = new Date("20/01/2022");
let date2 = new Date("22/01/2022");

// Calculating the time difference
// of two dates
let Difference_In_Time = date2.setDate() - date1.setDate()

// Calculating the no. of days between
// two dates
let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

// To display the final no. of days (result)
console.log("Total number of days between dates:" +date1.toString() + " and " + date2.toString() + " is: " + Difference_In_Days + " days");
