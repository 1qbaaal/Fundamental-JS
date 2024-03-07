// Write a code to find area of rectangle.

let length = 5
let width = 3
console.log(length * width)

// Write a code to find perimeter of rectangle.

let length1 = 5
let width1 = 3
console.log(2 *(length1 + width1))

// Write a code to find diameter, circumference and area of a circle.

let radius = 5

console.log(radius * 2)
console.log(2 * Math.PI * radius)
console.log(Math.PI * radius ** 2)

// Write a code to find angles of triangle if two angles are given.

let a = 80
let b = 65
console.log(180 -(a + b))

// Write a code to get difference between dates in days

let date1 = new Date('2024-02-05')
let date2 = new Date('2024-02-07')
let differenceDateInMs = date2 - date1
let totalDays = differenceDateInMs / (24 * 60 * 60 * 1000) // perkalian merupakan konversi dari 1 hari > jam > menit > milisecond
console.log(totalDays)


//  Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days). 

let days = 400
let year = Math.floor(days/365)
let daysLeft = days%365 // untuk mencari sisa hari, harus dimodulus (%) untuk mencegah sisa hari yang lebih banyak
let month = Math.floor(daysLeft/30) // untuk mencari bulan
daysLeft = daysLeft%30
console.log(`
    Total ${days} = ${year} Year, ${month} Month, ${daysLeft} Days
`)