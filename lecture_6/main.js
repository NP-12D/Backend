//1)იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
//აუცილებელია გამოიყენო ფრომისი
let promis = new Promise((res, rej) => {
  res("some");
});

function block() {
  for (let i = 1; i < 10000000000; i++) {}
}
console.log("one");
promis.then((res) => block());
console.log("two");

//2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.
let promis1 = new Promise((res, rej) => {
  res("resolved");
});
let promis2 = new Promise((res, rej) => {
  rej("rejected");
});
promis1.then((res) => console.log(res)).catch((rej) => console.log(rej));
promis2.then((res) => console.log(res)).catch((rej) => console.log(rej));
Promise.allSettled([promis1, promis2]).then((res) =>
  console.log(res),
);

//3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული
let prom1 = new Promise((res, rej) => res("resolve"));
let prom2 = new Promise((res, rej) => rej("reject"));
let prom3 = new Promise((res, rej) => res("resolve"));
let prom4 = new Promise((res, rej) => rej("reject"));
Promise.any([prom1, prom2, prom3, prom4]).then((res) => console.log(res));

//4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი
Promise.allSettled([prom1, prom2, prom3, prom4]).then((res) => {
  let promiscount = res.reduce(
    (acc, cur) => {
      if (cur.status === "fulfilled") {
        acc.resolve++;
      } else {
        acc.reject++;
      }

      return acc;
    },
    { resolve: 0, reject: 0 },
  );
  console.log(promiscount);
});

//5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები
let myPromise1 = new Promise((res, rej) => res("resolve"));
let myPromise2 = new Promise((res, rej) => rej("reject"));
let myPromise3 = new Promise((res, rej) => res("resolve"));
let myPromise4 = new Promise((res, rej) => rej("reject"));
let myPromise5 = new Promise((res, rej) => res("resolve"));
Promise.allSettled([
  myPromise1,
  myPromise2,
  myPromise3,
  myPromise4,
  myPromise5,
]).then((res) => {
  let filterde = res.filter((item) => item.status === "rejected");
  console.log(filterde);
});

//6)api1 = https://jsonplaceholder.typicode.com/users
//api2 = https://jsonplaceholder.typicode.com/posts
//გაუშვი ეს ორი API ერთდროულად
// async function getData(API) {
//   try {
//     let response = await fetch(API);
//     let data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
// Promise.all([
//   getData("https://jsonplaceholder.typicode.com/users"),
//   getData("https://jsonplaceholder.typicode.com/posts"),
// ])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
