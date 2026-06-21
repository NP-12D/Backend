const fs = require("fs/promises");
async function read(path, parse) {
  let readData = await fs.readFile(path, "utf-8");
  return parse ? JSON.parse(readData) : readData;
}
async function write(path, data, stingify) {
  await fs.writeFile(path, stingify ? JSON.stringify(data, null, 2) : data);
}
function sum(...arg) {
  return arg.reduce((acc, cur) => acc + cur, 0);
}
function reverse(string) {
  return string.split("").reverse().join("");
}
module.exports = { sum, reverse, write, read };
