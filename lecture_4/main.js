//1) გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
console.log("1)იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში");
const laptops = [
  { model: "Dell XPS 13", price: 1800 },
  { model: "MacBook Pro 14", price: 2499 },
  { model: "Lenovo ThinkPad X1", price: 2100 },
  { model: "Asus Zephyrus G14", price: 1999 },
];
const expensive = laptops.sort((a, b) => b.price - a.price);
console.log(expensive[0]);
//2)შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი, რომელიც დააბრუნებს ფართობს.
const square = {
  width: 10,
  height: 12,
  getArea: function () {
    return this.width * this.height;
  },
};
console.log(`2)width=${square.width}, height=${square.height} area=${square.getArea()}`);
//3)დაბეჭდე მხოლოდ იმ სტუდენტების სახელები, რომელთაც passed === true.
console.log("3)სტუდენტების სახელები, რომელთაც passed === true.")
const students = [
  { name: "Giorgi", score: 85, passed: true },
  { name: "Nika", score: 50, passed: false },
  { name: "Mariam", score: 92, passed: true },
  { name: "Luka", score: 60, passed: false },
];
const passedStudents = students.filter((student) => student.passed);
passedStudents.forEach(student=>console.log(student.name));
//4)გაფილტრე ისეთი პროდუქტები, რომლებიც 10$-ზე იაფია და დააბრუნე მხოლოდ მათი სათაურების მასივი.
console.log("4)პროდუქტები, რომლებიც 10$-ზე იაფია და დააბრუნე მხოლოდ მათი სათაურების მასივი.")
const products = [
  { title: "Pencil", price: 2 },
  { title: "Notebook", price: 5 },
  { title: "Backpack", price: 35 },
  { title: "Ruler", price: 3 },
  { title: "Calculator", price: 40 },
];
let les10 = products
  .filter((product) => product.price < 10)
  .map((product) => product.title);
console.log(les10);

//5)დაალაგე ზრდადობით rating-ის მიხედვით
console.log("5)დაალაგე ზრდადობით rating-ის მიხედვით")
const movies = [
  { title: "Inception", rating: 9 },
  { title: "Avatar", rating: 7.5 },
  { title: "Joker", rating: 8.2 },
  { title: "Tenet", rating: 6.9 },
];
let sortRating = movies.sort((a, b) => a.rating - b.rating);
console.log(sortRating);
//6)იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model
console.log("6)ყველაზე იაფი ტელეფონი და მისი model")
const phone = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];
let cheapest = phone.sort((a, b) => a.price - b.price)[0].model;
console.log(cheapest);
//7)დაბეჭდე 300- გვერდიანზე მეტი
console.log("დაბეჭდე 300- გვერდიანზე მეტი");
const books = [
  { title: "Harry Potter", pages: 500 },
  { title: "The Little Prince", pages: 120 },
  { title: "Lord of the Rings", pages: 700 },
  { title: "Animal Farm", pages: 250 },
];

const abov300 = books.filter((book) => book.pages > 300);
console.log(abov300);
//8)დაალაგე ზრდადობით და შეკრიბე ფასი
console.log("8)დაალაგე ზრდადობით და შეკრიბე ფასი")
const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];
const sortasc = phones.sort((a, b) => a.price - b.price);
console.log(sortasc);
console.log(sortasc.reduce((sum, cur) => sum + cur.price, 0));
console.log(`ერთხაზში:${  phones
    .sort((a, b) => a.price - b.price)
    .reduce((sum, cur) => sum + cur.price, 0)}`

);
