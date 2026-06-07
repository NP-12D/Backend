// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს
let arr = [1, 2, 3, 4, 5, 6];
let even = arr.filter((item) => item % 2 === 0);
let aveOfeven = even.reduce((con, curr) => con + curr) / even.length;
console.log(`საშუალო [${even}]-s არის ${aveOfeven}`)


// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
// let = "I love JavaScript"
function countWords(string) {
  let arr = string.trim().split(" ");
  return arr.length;
}
console.log(`წინადადებაში "I love JavaScript" არის ${countWords("I love JavaScript")} სიტყვა`);
// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(13));
// 4) იპოვე ყველაზე გრძელი ისტყვა
let words = ["dog", "elephant", "cat", "hippopotamus"];
let max = 0;
let maxWord = "";
for (let i = 0; i < words.length; i++) {
  if (words[i].length > max) {
    max = words[i].length;
    maxWord = words[i];
  }
}
console.log(`ყველაზე გრძელი სიტყვა ${maxWord} რომლის სიგრძეა ${max}`);
let sortword = words.sort((a, b) => b.length - a.length);
console.log(`ყველაზე გრძელი სიტყვა ${sortword[0]}`);
// 5)let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
let arr_5 = [3, 5, 3, 2, 5, 5, 3, 5];
let grouped = arr_5.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur] += 1;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
console.log(grouped);
let maxrepeat = 0;
let maxreNumber = "";
for (let i in grouped) {
  if (grouped[i] > maxrepeat) {
    maxrepeat = grouped[i];
    maxreNumber = i;
  }
}
console.log(`ყველაზე ხშირად მეორდება ${maxreNumber} , ${maxrepeat}-ჯერ`);

// 6)let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let countevenodd = nums.reduce(
  (acc, cur) => {
    if (cur % 2 === 0) acc.even++;
    else acc.odd++;
    return acc;
  },
  { even: 0, odd: 0 },
);
console.log(`ლუწების რაოდენობა ${countevenodd.even}`);
console.log(`კენტების რაოდენობა ${countevenodd.odd}`);
// 7)let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
let nums2 = [10, 2, 33, 5, 7];
function findmin(arr) {
  let min = Math.min(...arr);
  return min;
}
console.log(nums2)
console.log(`მასივში ყველზე პატარა რიცხვია ${findmin(nums2)}`);
