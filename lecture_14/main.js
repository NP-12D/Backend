#!/usr/bin/env node
import { capital, toupper, isPalindrom, longest } from "./utils/helper.js";
// 1)შექმენი utils/helepr.js. შექმენი ფუნქცია რომელსაც მიიღებს სტრინგს და გადააქცევს capital letter-ად. აუცილებელია გამოიყენო module(package-დან შეცვალე)
console.log(toupper("hello world"));
console.log(capital("hello world"));

// 2)დაწერე ფუქნცია რომელიც შეამოწმებს გადმოცემული სტრინგი პალინდრომია თუ არა (ანუ ორივე მხრიდან თუ ერთნაირად იკითხება).აუცილებელია module(package-დან შეცვალე) გამოიყენო
console.log(isPalindrom("ana"));
// 3)დაწერე ფუქნცია რომელიც იპოვის ყველაზე გრძელ სიტყვას როცა გადავცემ (I love JavaScript very much) - უნდა დააბრუნოს JavaScript. აუცილებელია გამოიყენო module.
console.log(longest("I love JavaScript very much"));

// 4)შექმენი სერვერი სადაც გექნება როუტები,"/","/users","/posts".
// აუცილებელია გაუკეთო ორივეს pagination,id-ის მეშვეობით ძებნა და /users ასევე დაამატე name-ით ძებნა
import { promises as fs } from "fs";
import http from "http";
import url from "url";
import queryString from "querystring";

const PORT = 8080;

const server = http.createServer(async (req, res) => {
  const parsedURL = url.parse(req.url);
  const query = queryString.parse(parsedURL.query);

  const usersData = JSON.parse(await fs.readFile("users.json", "utf-8"));
  const postsData = JSON.parse(await fs.readFile("posts.json", "utf-8"));

  if (parsedURL.pathname === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify({ message: "avto" }));
  } else if (parsedURL.pathname === "/users") {
    let result = usersData;

    if (query.id) {
      const user = usersData.find((u) => u.id === +query.id);
      res.writeHead(200, { "content-type": "application/json" });
      if (!user) return res.end(JSON.stringify({ error: "User not found" }));
      return res.end(JSON.stringify(user));
    }

    if (query.name) {
      result = usersData.filter((u) =>
        u.name.toLowerCase().includes(query.name.toLowerCase()),
      );
    }

    let { page = 1, take = 30 } = query;
    if (take > 30) {
      take = 30;
    }
    result = result.slice((page - 1) * take, page * take);

    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify(result));
  } else if (parsedURL.pathname === "/posts") {
    let result = postsData;

    if (query.id) {
      const post = postsData.find((p) => p.id === +query.id);
      res.writeHead(200, { "content-type": "application/json" });
      if (!post) return res.end(JSON.stringify({ error: "Post not found" }));
      return res.end(JSON.stringify(post));
    }

    let { page = 1, take = 30 } = query;
    if (take > 30) {
      take = 30;
    }

    result = result.slice((page - 1) * take, page * take);

    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify(result));
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    return res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);

// 5) შექმენი products-cli,რომელსაც ექნება დამატება,წაკითხვა,id-ის მიხედვით წაკითხვა, წაშლა და აფდეითი.
// fields(name,description,date,category) + მე თუ გავატან option ის მიხედვით --isexpire. უნდა შეამოწმოს თარიღი და დაამატოს ვადა აქვს გასული თუ არა
import { Command } from "commander";
const program = new Command();

program
  .command("add")
  .argument("name")
  .argument("description")
  .argument("date")
  .argument("category")
  .option("--isexpire")
  .action(async (name, description, date, category, option) => {
    let readProducts = await fs.readFile("products.json", "utf-8");
    let parseReadProducts = JSON.parse(readProducts);
    let lastId = parseReadProducts[parseReadProducts.length - 1]?.id || 0;
    let newObj = {
      id: lastId + 1,
      name,
      description,
      date,
      category,
    };
    if (option.isexpire) {
      newObj.isExpired = new Date(date) < new Date();
    }
    parseReadProducts.push(newObj);
    await fs.writeFile(
      "products.json",
      JSON.stringify(parseReadProducts, null, 2),
    );
    console.log("Product added:", newObj);
  });
program.command("show").action(async () => {
  let readProducts = await fs.readFile("products.json", "utf-8");
  let parseReadProducts = JSON.parse(readProducts);
  console.log(parseReadProducts);
});
program
  .command("showByID")
  .argument("id")
  .action(async (id) => {
    let readProducts = await fs.readFile("products.json", "utf-8");
    let parseReadProducts = JSON.parse(readProducts);
    let findebyid = parseReadProducts.find((item) => item.id === +id);
    if (!findebyid) {
      console.log("not found");
      return;
    }
    console.log(findebyid);
  });
program
  .command("update")
  .argument("id")
  .argument("[name]")
  .argument("[description]")
  .argument("[date]")
  .argument("[category]")
  .action(async (id, name, description, date, category) => {
    let readProducts = await fs.readFile("products.json", "utf-8");
    let parseReadProducts = JSON.parse(readProducts);
    let index = parseReadProducts.findIndex((item) => item.id === +id);
    if (index === -1) {
      console.log("not found");
      return;
    }
    parseReadProducts[index] = {
      ...parseReadProducts[index],
      name: name || parseReadProducts[index].name,
      description: description || parseReadProducts[index].description,
      date: date || parseReadProducts[index].date,
      category: category || parseReadProducts[index].category,
    };
    await fs.writeFile(
      "products.json",
      JSON.stringify(parseReadProducts, null, 2),
    );
    console.log("updated successfully", parseReadProducts[index]);
  });

program
  .command("delete")
  .argument("id")
  .action(async (id) => {
    let readProducts = await fs.readFile("products.json", "utf-8");
    let parseReadProducts = JSON.parse(readProducts);
    let index = parseReadProducts.findIndex((item) => item.id === +id);
    if (index === -1) {
      console.log("not found");
      return;
    }
    parseReadProducts.splice(index, 1);

    await fs.writeFile(
      "products.json",
      JSON.stringify(parseReadProducts, null, 2),
    );
    console.log("deleted successfully");
  });

program.parse();
