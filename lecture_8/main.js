// ArrayTasks
// 1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];
let newarr = arr.flat(Infinity).sort((a, b) => a - b);
let unique = [...new Set(newarr)];
console.log(unique);

let uniquewitfor = [];
for (let i = 0; i < newarr.length; i++) {
  if (!uniquewitfor.includes(newarr[i])) {
    uniquewitfor.push(newarr[i]);
  }
}
console.log(uniquewitfor);
// 2) იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.
let products = [
  { name: "Phone", price: 1200, rating: 4.5 },
  { name: "Laptop", price: 2500, rating: 4.8 },
  { name: "Book", price: 30, rating: 4.9 },
  { name: "TV", price: 800, rating: 4.0 },
];
let filterd = products
  .filter((item) => item.price < 1000)
  .sort((a, b) => a.rating - b.rating);
console.log(filterd[filterd.length - 1]);

// 3) რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული
let sentence = "dog cat dog bird cat dog fish bird";
let sentenceArr = sentence.split(" ");
let gruped = sentenceArr.reduce(
  (acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  },

  {},
);
console.log(gruped);
let max = gruped.dog;
let maxWord = "";

for (let i in gruped) {
  if (gruped[i] >= max) {
    max = gruped[i];
    maxWord = i;
  }
}
console.log(`ყველაზე ხშირად მეორდება სიტყვა ${maxWord} ${max}-ჯერ`);

// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში.
function countChar(string, char) {
  let arr = string.split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      count++;
    }
  }
  return console.log(`${string}-ში ასო -${char}  გვხდება ${count}-ჯერ`);
}
countChar("Hellooooo", "o");
// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig)
function palindrom(name) {
  let reversed = name.toLowerCase().split("").reverse().join("");
  if (name.toLowerCase() === reversed) {
    console.log(`${name} is palindrom`);
  } else {
    console.log(`${name} is not  palindrom`);
  }
}
function palindromWhitFor(name) {
  let reversed = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reversed += [name[i]];
  }

  if (name.toLowerCase() === reversed.toLocaleLowerCase()) {
    console.log(`${name} is palindrom`);
  } else {
    console.log(`${name} is not  palindrom`);
  }
}
palindrom("Ana");
palindromWhitFor("abba");

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.
function twoArr(arr1, arr2) {
  let combined = [...arr1, ...arr2];
  let unique = [...new Set(combined)];
  let sum = unique.reduce((acc, cur) => acc + cur, 0);
  return console.log(
    `ჯამი ორი გაერთიანებული და დუბლიკატ წაშლილი მასივის ${sum}  `,
  );
}
twoArr([1, 2, 3], [0, 6, 7, 3]);
//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად.
function factorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return console.log(`${num}! - ${factorial}`);
}
factorial(5);
// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]
function twoSum(arr, sum) {
  let wyvilebi = [];
  for (let x = 0; x < arr.length; x++) {
    for (let y = x + 1; y < arr.length; y++)
      if (arr[x] + arr[y] === sum) {
        wyvilebi.push([arr[x], arr[y]]);
      }
  }

  if (wyvilebi.length > 0) {
    console.log(`${sum} gvadzlevs Semdegi wyvilebi:`);
    console.log(wyvilebi);
  } else {
    console.log("ასეთი წყვილი არ არის ამ მასივში");
  }
}
twoSum([1, 2, 4, 3, 5, 6], 7);
twoSum([1, 2, 3, 4, 5, 6, -7, -8], -15);
