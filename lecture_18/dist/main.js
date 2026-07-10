#!/usr/bin/env node
import { connect } from "./config/connectToMongoDB.js";
// 1)გაიარეთ რეგისტრაცია mongoDB-ზე დააგენერირეთ connect link და დაქონექთდით ბაზასთან.(npm i mongoose,npm i express) დასერჩეთ არარის ძაან რთული.
connect();
let users = [];
import { Command } from "commander";
const program = new Command();
program
    .command("add")
    .argument("name")
    .argument("age")
    .action(async (name, age) => {
    let lastId = users[users.length - 1]?.id || 0;
    let newObj = {
        id: lastId + 1,
        name,
        age,
    };
    users.push(newObj);
    console.log(`User ${name} is ${age} years old`);
    console.log(users);
});
program.parse();
let products = [
    {
        id: 1,
        name: "Apple",
        price: 2,
        category: "Fruit",
        inStock: true,
        rating: 4.8,
        description: "Fresh red apple, organic",
    },
    {
        id: 2,
        name: "Banana",
        price: 1,
        category: "Fruit",
        inStock: true,
        rating: 4.5,
        description: "Sweet ripe bananas",
    },
    {
        id: 3,
        name: "Orange",
        price: 1.5,
        category: "Fruit",
        inStock: false,
        rating: 4.2,
        description: "Juicy Valencia orange",
    },
    {
        id: 4,
        name: "Mango",
        price: 3,
        category: "Fruit",
        inStock: true,
        rating: 4.9,
        description: "Tropical mango, imported",
    },
    {
        id: 5,
        name: "Pineapple",
        price: 4,
        category: "Fruit",
        inStock: true,
        rating: 4.6,
        description: "Sweet pineapple with golden flesh",
    },
];
// თუ ფასი მეტია 100-ზე, დაბეჭდე "Discount available!"
let sum = products.reduce((acc, cur) => acc + cur.price, 0);
if (sum > 100) {
    console.log("Discount available!");
}
function levelUp(hero) {
    if (hero.age > 30) {
        hero.level = "Pro";
    }
    else {
        hero.level = "Newbie";
    }
    console.log(`${hero.name} is now level:${hero.level}`);
}
const hero1 = {
    name: "Batman",
    age: 35,
    power: "Stealth",
};
levelUp(hero1);
// 5)დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.
function main(arr) {
    return arr[0];
}
const firstproduct = main(products);
console.log(firstproduct);
//# sourceMappingURL=main.js.map