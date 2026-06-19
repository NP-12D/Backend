console.log("created index.js file");
const path=require("path");
const fs=require("fs/promises")
async function main() {
  const pathName =  path.join(__dirname, "..", "message.txt");
  await fs.writeFile(pathName, "message");
  let text= await fs.readFile(pathName,"utf-8")
  let reversed=text.split("").reverse().join("")
    await fs.writeFile(pathName, reversed);
}
