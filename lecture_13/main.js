#!/usr/bin/env node
// 1) შექმენი utils/helper.js სადაც გექნება ფუქნციები read(უნდა პარსავდეს true-ს გადაწოდების შემდეგ) და write(ანალოგიურად stringify-უნდა გაუკეთოს).
// შექმენი ამ ფუქნციებით 2 ფაილი და ჩაწერე შიგნით ნებისმიერი რამ. ასევე ჰელფერებში დაამატე ჯამის დათვლა და სტრინგის შეტრიალების ფუქნცია.
const axios = require("axios");
const { sum, reverse, write, read } = require("./utils/helper");
let users = [
  { name: "Gio", age: 21, email: "gio@gmail.com" },
  { name: "Nika", age: 14, email: "nikaexample.com" },
  { name: "Mariam", age: 16, email: "mariam@reeducate.ge" },
  { name: "Lasha", age: 24, email: "lashareeducate.ge" },
  { name: "Ana", age: 25, email: "ana@mail.com" },
];
async function main() {
  await write("data.json", users, true);
  await read("data.json", true);
}
main();

console.log(sum(1, 2, 3, 4, 5));
console.log(reverse("nona"));
// 2)წამოიღე ინფორმაცია ამ ორი api-დან
// let api = https://jsonplaceholder.typicode.com/users
// let api2 = https://jsonplaceholder.typicode.com/posts
// 1)გამოიყენე axios და ერთდროულად გაუშვი 2 API.
// 2)გაუშვი ორივე ერთად და რომელიც პირველი მოვა ის დააკონსოლე.
// 3)გაუშვი ორივე ერთად და დააბრუნე ინფრომაცია რომელი დარესოლვდა დარეჯექთდა და ა.შ.
async function getData(api) {
  let res = await axios.get(api);
  return res.data;
}

// Promise.all([
//   getData("https://jsonplaceholder.typicode.com/users"),
//   getData("https://jsonplaceholder.typicode.com/posts"),
// ])
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));
// Promise.race([getData("https://jsonplaceholder.typicode.com/users"),getData("https://jsonplaceholder.typicode.com/posts")]).then((res=>console.log(res))).catch(error=>console.log(error));
// Promise.allSettled([
//   getData("https://jsonplaceholder.typicode.com/users"),
//   getData("https://jsonplaceholder.typicode.com/posts"),
// ]).then((res=>console.log(res))).catch(error=>console.log(error));

// 3)commander-ით შექმენი phone-cli, რომელსაც ექნება დამატება,წაშლა,id-ის მიხედვით კონკრეტული ობიექტის ამოღება,
// და option-ის მიხედვით(--america)- ამ ოფშენს თუ გადავცემთ ნომერს წინ უნდა დაუამტოს 011 (ანუ phone-cli add giorgi 574221355 --america)- ასე
// თუ გადავცემთ უნდა დაამტოს 011574221355

const { Command } = require("commander");
const program = new Command();
program
  .command("add")
  .description("this adds")
  .argument("name")
  .argument("number")
  .option("--america")
  .action(async (name, number, option) => {
    let readData = await read("phone.json", true);
    let lastId = readData[readData.length - 1]?.id || 0;
    let newnumber = {
      id: lastId + 1,
      name,
      number: option.america ? `011${number}` : number,
    };
    readData.push(newnumber);
    await write("phone.json", readData, true);
  });

program
  .command("delete")
  .description("delete number info")
  .argument("id")
  .action(async (id) => {
    let readDAtaJson = await read("phone.json", true);
    readDAtaJson = readDAtaJson.filter((el) => el.id !== +id);
    await write("phone.json", readDAtaJson, true);
  });
program
  .command("info")
  .description("get info")
  .argument("id")
  .action(async (id) => {
    let readDAtaJson = await read("phone.json", true);
    let find = readDAtaJson.find((number) => number.id === +id);
    console.log(find);
  });

program.parse();
