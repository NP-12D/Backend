//1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
console.log("1) ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა")
function Timer(sec) {
  let interval = setInterval(() => {
    console.log(sec);
    sec--;
    if (sec < 0) {
      clearInterval(interval);
      console.log("Time's Up");
    }
  }, 1000);
}
Timer(10);

//2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს
console.log("2) ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს ")
function equal(num) {

  let random;
  let randomInterval = setInterval(() => {
    random = Math.floor(Math.random() * 101);
    console.log(random);
    if (random === num) {
      clearInterval(randomInterval);
    }
  }, 1000);
}

//3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
console.log("3)მეტია თუ არა 27-ზე")
function greaterOrLessThan27(n, callback) {
  if (n > 27) {
    callback();
  } else {
    console.log(`${n} ნაკლებია 27-ზე`);
  }
}
greaterOrLessThan27(30, () => console.log("მეტია 27-ზე"));

//4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await
 console.log("4) than/catch & async/await");
async function getData(API) {
  try {
    let res = await fetch(API);
    let data = await res.json();
    console.log(data.slice(0, 4));
  } catch (error) {
    console.error("fetching error", error);
  }
}
getData("https://jsonplaceholder.typicode.com/users");
function getDataThen(API) {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.slice(0, 4));
    })
    .catch((error) => {
      console.error("fetching error", error);
    });
}

getDataThen("https://jsonplaceholder.typicode.com/users");

//5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
console.log("5)დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20")
let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 15 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 18 },
];
let grouped = people.reduce(
  (acc, cur) => {
    if (cur.age > 10) {
      acc.more10.push(cur);
    }
    if (cur.age < 20) {
      acc.les20.push(cur);
    }

    return acc;
  },
  { more10: [], les20: [] },
);
console.log("მეტია 10-ზე:", grouped.more10);
console.log(grouped.les20);
//6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".
console.log("6)დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს")
function moreThan(n1, n2, callback) {
  if (n1 > n2) {
    callback();
    console.log("მეტია");
  } else {
    console.log("ნაკლები ან ტოლია");
  }
}

//7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
console.log("დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები");
let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 45 },
  { name: "USB Cable", price: 7 },
  { name: "Headphones", price: 29.9 },
  { name: "Webcam", price: 52 },
];
let groupdproducts = products.reduce(
  (acc, curr) => {
    if (curr.price > 20) {
      acc.greaterThan20.push(curr);
    } else {
      acc.lessOrEqual20.push(curr);
    }
    return acc;
  },
  { greaterThan20: [], lessOrEqual20: [] },
);
console.log(groupdproducts.lessOrEqual20);
console.log(groupdproducts.greaterThan20);
