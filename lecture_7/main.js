//1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c)
//  და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
  isRightTriangle() {
    let a = this.a;
    let b = this.b;
    let c = this.c;
    if (
      a ** 2 + b ** 2 === c ** 2 ||
      a ** 2 + c ** 2 === b ** 2 ||
      b ** 2 + c ** 2 === a ** 2
    ) {
      return true;
    } else return false;
  }
}
let triangle = new Triangle(3, 4, 5);
console.log(triangle.getArea());
console.log(triangle.getPerimeter());
console.log(triangle.isRightTriangle());

//2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear.
//გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex()
class Smartphone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }
}
class GamingPhone extends Smartphone {
  constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
    super(brand, model, releaseYear);
    this.gpuScore = gpuScore;
    this.batteryCapacity = batteryCapacity;
  }
  performanceIndex() {
    let date = new Date();
    return (
      (this.gpuScore * this.batteryCapacity) /
      (date.getFullYear() - this.releaseYear + 1)
    );
  }
}
let smartphone = new Smartphone("Apple", "Iphone 13 Pro Max", 2021);
console.log(smartphone.brand);
let gaming = new GamingPhone("Apple", "Iphone 13 Pro Max", 2021, 9400, 4352);
console.log(gaming.performanceIndex());

//3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),
class CryptoWallet {
  constructor(balance) {
    this.balance = balance;
    this.history = [];
  }
  deposit(amount) {
    this.history.push(`Deposited ${amount}`);
    return (this.balance += amount);
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.history.push(`Witdrew ${amount}`);
      return (this.balance -= amount);
    } else {
      return "Insufficient funds";
    }
  }
  transfer(amount, otherWallet) {
    if (this.balance >= amount) {
      this.balance -= amount;
      otherWallet.balance += amount;
      this.history.push(`Transferred ${amount} to other wallet`);
      otherWallet.history.push(`Received ${amount}`);
    } else {
      return "Insufficient funds";
    }
  }
  getHistory() {
    return this.history;
  }
}
let wallet = new CryptoWallet(100);
let wallet2 = new CryptoWallet(50);
wallet.deposit(100);
wallet.withdraw(50);
wallet.transfer(20, wallet2);
console.log("Wallet balance:", wallet.balance);
console.log("Wallet2 balance:", wallet2.balance);
console.log(wallet.getHistory());
console.log(wallet2.getHistory());

//4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()

class Wishlist {
  constructor() {
    this.arr = [];
  }
  addItem(item) {
    this.arr.push(item);
  }
  deleteItem(id) {
    this.arr = this.arr.filter((item) => item.id !== id);
  }
  updateItem(id, item) {
    let index = this.arr.findIndex((item) => item.id === id);
    if (index !== -1) this.arr[index] = item;
  }
}
let wishlist = new Wishlist();
wishlist.addItem({ id: 0, category: "Table", name: "Uplift v2", price: 1700 });
console.log(wishlist.arr);
wishlist.updateItem(0, {
  id: 0,
  category: "Table",
  name: "Uplift V3",
  price: 2000,
});
console.log(wishlist.arr);
wishlist.deleteItem(0);
console.log(wishlist.arr);

//5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(),
// რომელიც დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).
class Freelancer {
  constructor(hours, rate) {
    this.hours = hours;
    this.rate = rate;
  }
  calculateEarnings() {
    let salary = this.hours * this.rate;
    if (this.hours > 160) {
      return (salary += (this.hours - 160) * this.rate * 0.5);
    } else return salary;
  }
}
let freelancer_1 = new Freelancer(150, 20);
let freelancer_2 = new Freelancer(180, 25);
console.log("Freelancer_1 earnings:", freelancer_1.calculateEarnings());
console.log("Freelancer_2 earnings:", freelancer_2.calculateEarnings());
