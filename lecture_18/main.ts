#!/usr/bin/env node
import { connect } from "./config/connectToMongoDB.js";

// 1)გაიარეთ რეგისტრაცია mongoDB-ზე დააგენერირეთ connect link და დაქონექთდით ბაზასთან.(npm i mongoose,npm i express) დასერჩეთ არარის ძაან რთული.
connect();
// 2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და აბრუნებს ტექსტს User Nika is 22 years old.
interface UserType {
  id: number;
  name: string;
  age: number;
}
let users: UserType[] = [];
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

// 3)აღწერე პროდუქტები ინტერფეისით და გამოითვალე საერთო ფასი.
interface ProductType {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  rating: number;
  description: string;
}
let products: ProductType[] = [
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
// 4)შექმენი ორი ინტერფეისი  IHero და ISuperHero.IHero უნდა აღწერდეს ჩვეულებრივი გმირის მონაცემებს:name: string - გმირის სახელი age: number - გმირის ასაკი.

// ISuperHero უნდა დაექსთენდდეს IHero-ით და დაამატოს: power: string - გმირის ძალა level?: string - optional ველი, რომელიც განისაზღვრება მოგვიანებით

// შექმენი ფუნქცია levelUp(hero: ISuperHero): void, რომელიც:
// ამოწმებს გმირის ასაკს
// თუ ასაკი მეტია 30-ზე - level = "Pro"
// თუ ნაკლებია ან ტოლია 30-ის - level = "Newbie"
// დაბეჭდავს შედეგს კონსოლში:
// "Batman is now level: Pro"

// მინიშნება
// const hero1: ISuperHero = {
//   name: "Batman",
//   age: 35,
//   power: "Stealth",
// };
interface IHero {
  name: string;
  age: number;
}
interface ISuperHero extends IHero {
  power: string;
  level?: string;
}
function levelUp(hero: ISuperHero): void {
  if (hero.age > 30) {
    hero.level = "Pro";
  } else {
    hero.level = "Newbie";
  }
  console.log(`${hero.name} is now level:${hero.level}`);
}
const hero1: ISuperHero = {
  name: "Batman",
  age: 35,
  power: "Stealth",
};
levelUp(hero1)

// 5)დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.
function main<T>(arr:T[]){
    return arr[0]
}

const firstproduct = main(products)
console.log(firstproduct)