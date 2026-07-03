// შექმენი შენი სერვერი express-ის დახმარებით. ააწყე Products-ის CRUD, რომელსაც ექნება:დამატება,წაშლა,აფდეითი,id-ის მიხედვით
// ინფორმაციის წამოღება,ფეჯინეიშენი,სექრეთ როუტი,price, category ,isExpire  და name უნდა იყოს აუცილებელი ფილდი.
//  ასევე არუნდა შეეძლოს price > 200 მეტის დარექვესტება.დაამტე Routes,Services და middleWare[isadmin-ს უნდა შეეძლოს წაშლა და აფეითი.
//  isEditor-ს მარტო აფდეითი.

import express from "express";
import { Router } from "express";
import { prodRoute } from "./api/api.js";
const app = express();
const PORT = 9000;
app.use(express.json());

app.use("/api", prodRoute);
app.get("/", (req, res) => {
  res.json({ message: "main info...." });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
