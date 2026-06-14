const fs = require("fs/promises");
// 1)წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
async function Main() {
  await fs.writeFile("data.json", JSON.stringify(arr));
  let readData = await fs.readFile("data.json", "utf-8");
  let readDataparse = await JSON.parse(readData);
  console.log(readDataparse);
  let sum = readDataparse.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
  await fs.writeFile("sum.json", JSON.stringify(sum));
}
Main();
// 2)ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში
async function Main2() {
  await fs.writeFile("text.txt", "reversetext");
  let readtext = await fs.readFile("text.txt", "utf-8");
  console.log(readtext);
  let reversed = readtext.split("").reverse().join("");
  console.log(reversed);
  await fs.writeFile("reversed.txt", reversed);
}
Main2();

// 3)შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში
let users = [
  { name: "Gio", age: 21, email: "gio@gmail.com" },
  { name: "Nika", age: 14, email: "nikaexample.com" },
  { name: "Mariam", age: 16, email: "mariam@reeducate.ge" },
  { name: "Lasha", age: 24, email: "lashareeducate.ge" },
  { name: "Ana", age: 25, email: "ana@mail.com" },
];
async function Main3() {
  await fs.writeFile("data1.json", JSON.stringify(users));
}
Main3();

// 4)წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში
async function Main4() {
  let read1 = await fs.readFile("text.txt", "utf-8");
  let read2 = await fs.readFile("reversed.txt", "utf-8");
  await fs.writeFile("combined.txt", read1);
  await fs.appendFile("combined.txt", read2);
}
Main4();

// 5)ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა
async function Main5() {
  let wordcount =
    "ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა";
  await fs.writeFile("wordcount.txt", wordcount);
  let readfromwordcount = await fs.readFile("wordcount.txt", "utf-8");
  let count = readfromwordcount.split(" ");
  console.log(count);
  console.log(count.length);
}
Main5();

// 6)წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე
async function Main6() {
  let readfromdat1 = await fs.readFile("data1.json", "utf-8");
  let parseusers = JSON.parse(readfromdat1);
  console.log(parseusers);
  let usersless18 = parseusers.filter((user) => user.age > 18);
  await fs.writeFile("more18.json", JSON.stringify(usersless18));
}
Main6();

// 7)შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
// შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ "passed.json" - ში
let students = [
  { name: "Nino", score: 85, passed: true },
  { name: "Giorgi", score: 72, passed: true },
  { name: "Mariam", score: 60, passed: false },
  { name: "Luka", score: 95, passed: true },
  { name: "Ana", score: 40, passed: false },
];
async function Main7() {
  await fs.writeFile("students.json", JSON.stringify(students));
  let student = await fs.readFile("students.json", "utf-8");
  let parsestudents = JSON.parse(student);
  let passed = parsestudents.filter((stu) => stu.score > 50);
  await fs.writeFile("passed.json", JSON.stringify(passed));
}
Main7();
// 8)წაიკითხე "users.json", და ყველას, ვისაც არ აქვს "@" ელფოსტაში, წაშალე
// [
//   { "name": "Gio", "email": "gio@gmail.com" },
//   { "name": "Nika", "email": "nikaexample.com" },
//   { "name": "Mariam", "email": "mariam@reeducate.ge" },
//   { "name": "Lasha", "email": "lashareeducate.ge" },
//   { "name": "Ana", "email": "ana@mail.com" }
// ]
async function Main8() {
  let readusers = await fs.readFile("users.json", "utf-8");
  let parsepeadusers = JSON.parse(readusers);
  console.log(parsepeadusers);
  let usersvalidemail = parsepeadusers.filter((user) =>
    user.email.includes("@"),
  );
  await fs.writeFile("users.json", JSON.stringify(usersvalidemail));
}
Main8();
