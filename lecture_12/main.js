const fs = require("fs/promises");
// 1)შექმენი 2 ფოლდერი 3 ფაილი, წაშალე მარტო ფოლდერები. შეამომწე lstat-ის მეშვეობით
    // async function main() {
    // await fs.mkdir("folder1", { recursive: true });
    // await fs.mkdir("folder2", { recursive: true });
    // await fs.writeFile("file1.txt", "file1.txt");
    // await fs.writeFile("file2.txt", "file2.txt");
    // await fs.writeFile("file3.txt", "file3.txt");
    // let info = await fs.readdir(__dirname);
    // console.log(info);
    // for (let item of info) {
    //     let infostat = await fs.lstat(item);
    //     console.log(infostat.isDirectory());
    //     if (infostat.isDirectory()) {
    //     await fs.rmdir(item,{recursive:true});
    //     }
    // }
    // }
    // main();
// 2)შექმენი  მთავარი ფოლდერი, ფოლდერში აიღე ერთი main.js ამ main.js ით შექმენი (mkdir) ფოლდერი და ამ ფოლდერში ჩაწერე index.js
//  შემდეგ ამ index.js-ით ჩაწერე მთავარფოლდერში message.txt, ამ message.txt-ში რაც გექნება შეატრიალე ეგ სტრინგი და ისევ იგივეში ჩაწერე.

async function main2() {
  await fs.mkdir("mainfolder", { recursive: true });
}
main2();
// 3) შექმენი ფოლდერი ამ ფოლდერში გქონდეს 6 ფაილი. 3 ფაილის გაფართოვება უნდა იყოს .txt.
// 3 ფაილის გაფართოვება უნდა იყოს .js. შენ უნდა იპოვო ,ისეთი ფაილები, რომლის გაფართოვებაცაა
//  .txt და ისინი ჩწერო საერთო all.txt-ში

const path = require("path");

async function main3() {
  await fs.mkdir("Folder", { recursive: true });
  await fs.writeFile("Folder/file1.txt", "file1.txt");
  await fs.writeFile("Folder/file2.txt", "file2.txt");
  await fs.writeFile("Folder/file3.txt", "file3.txt");
  await fs.writeFile("Folder/main1.js", "console.log('main1.js')");
  await fs.writeFile("Folder/main2.js", "console.log('main2.js')");
  await fs.writeFile("Folder/main3.js", "console.log('main3.js')");

  let files = await fs.readdir("Folder");

  let txtFiles = files.filter((file) => file.endsWith(".txt") && file !== "all.txt");

  let combinedText = "";
  for (let file of txtFiles) {
    let text = await fs.readFile(`Folder/${file}`, "utf-8");
    combinedText += text + "\n";
  }

  await fs.writeFile("Folder/all.txt", combinedText);
}

main3();

// 4) დაწერე http სერვერი და გამოდგი 3 ენდფოინითი (/animals,/cars,/motorcycle)
const animals = [
  {
    id: 1,
    name: "Horse",
    age: 7,
    color: "Brown",
    type: "Home",
  },
  {
    id: 2,
    name: "Lion",
    age: 5,
    color: "Golden",
    type: "Wild",
  },
  {
    id: 3,
    name: "Eagle",
    age: 3,
    color: "Dark Brown",
    type: "Wild",
  },
];
const cars = [
  {
    id: 1,
    brand: "Mercedes",
    model: "C-Class",
    year: 2022,
    color: "Black",
    type: "Luxury",
  },
  {
    id: 2,
    brand: "BMW",
    model: "X5",
    year: 2023,
    color: "White",
    type: "SUV",
  },
  {
    id: 3,
    brand: "Audi",
    model: "A6",
    year: 2021,
    color: "Silver",
    type: "Sedan",
  },
  {
    id: 4,
    brand: "Porsche",
    model: "911 Carrera",
    year: 2024,
    color: "Red",
    type: "Sports",
  },
];
const motorcycles = [
  {
    id: 1,
    brand: "Harley-Davidson",
    model: "Street 750",
    year: 2021,
    color: "Black",
    type: "Cruiser",
  },
  {
    id: 2,
    brand: "Yamaha",
    model: "MT-07",
    year: 2022,
    color: "Blue",
    type: "Sport",
  },
  {
    id: 3,
    brand: "Ducati",
    model: "Panigale V4",
    year: 2023,
    color: "Red",
    type: "Superbike",
  },
  {
    id: 4,
    brand: "Kawasaki",
    model: "Ninja ZX-10R",
    year: 2024,
    color: "Green",
    type: "Sport",
  },
];
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/animals") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(animals));
    res.end();
  }

  if (req.url === "/cars") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(cars));
    res.end();
  }

  if (req.url === "/motorcycle") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(motorcycles));
    res.end();
  }
});

server.listen(9000, () => {
  console.log("server running on http://localhost:9000");
});
