//შექმენი შენი სერვერი express-ის დახმარებით. ააწყე User-ის CRUD, რომელსაც ექნება:დამატება,წაშლა,აფდეითი,id-ის მიხედვით ინფორმაციის
// წამოღება,ფეჯინეიშენი,სექრეთ როუტი, age და name იყოს აუცილებელი ფილდი, ხოლო email და eyecolor ოფშენალი. ასევე არუნდა შეეძლოს
//  30 წელზე მეტის დარექვესთება და 10 წელზე ნაკლების.
const users = [
  {
    id: 0,
    age: 25,
    name: "Giorgi",
    email: "giorgi25@example.com",
    eyeColor: "brown",
  },
  {
    id: 1,
    age: 30,
    name: "Mariam",
    email: "mariam30@example.com",
    eyeColor: "green",
  },
  {
    id: 2,
    age: 26,
    name: "Nika",
    email: "nika22@example.com",
    eyeColor: "blue",
  },
  {
    id: 3,
    age: 28,
    name: "Luka",
    email: "luka28@example.com",
    eyeColor: "hazel",
  },
  { id: 4, age: 28, name: "Ana", email: "ana35@example.com", eyeColor: "gray" },
  {
    id: 5,
    age: 19,
    name: "Sandro",
    email: "sandro19@example.com",
    eyeColor: "brown",
  },
  {
    id: 6,
    age: 27,
    name: "Tamar",
    email: "tamar27@example.com",
    eyeColor: "green",
  },
  {
    id: 7,
    age: 29,
    name: "Irakli",
    email: "irakli40@example.com",
    eyeColor: "blue",
  },
  {
    id: 8,
    age: 25,
    name: "Nino",
    email: "nino33@example.com",
    eyeColor: "hazel",
  },
  {
    id: 9,
    age: 21,
    name: "Elene",
    email: "elene21@example.com",
    eyeColor: "brown",
  },
];

const express = require("express");
const app = express();
app.use(express.json());
const PORT = 8080;

app.get("/", (req, res) => {
  res.json({ message: "Main page", data: users.slice(0,5) });
});

app.get("/users", (req, res) => {
  console.log(req.query);
  let { page = 1, take = 5 } = req.query;
  take > 5 ? (take = 5) : take;
  const result = users.slice((page - 1) * take, page * take);
  res.json({ message: "Users list ", data: result });
});

app.get("/users/:id", (req, res) => {
  console.log(req.query);
  const { id } = req.params;
  let findbyid = users.find((item) => item.id === +id);
   if (!findbyid) {
    return res.status(404).json({ message: "not found", data: null });
  }
  res.json({ message: "users info by id", data: findbyid });
});

app.post("/users", (req, res) => {
  console.log(req.body);
  let { age, name, email, eyeColor } = req.body;
  let lastId = users[users.length - 1]?.id || 0;
  if (!age || !name) {
    return res.status(400).json({ message: "age and name are required"});
  }
  if (age < 10 || age > 30) {
    return res.status(400).json({ message: "Age must be between 10 and 30" });
  }
  let newObj = {
    id: lastId + 1,
    age,
    name,
    email,
    eyeColor,
  };
  users.push(newObj);
  res.json({ message: "added successfully", data: newObj });
});

app.delete("/users/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  let index = users.findIndex((item) => item.id === +id);
  if (index === -1) {
    return res.status(400).json({ message: "id is invalid", data: null });
  }
  let deleted = users.splice(index, 1);
  return res.json({ message: "deleted successfully", data: deleted });
});
app.put("/users/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  let { age, name, email, eyeColor } = req.body;
  let index = users.findIndex((item) => item.id === +id);
  if (index === -1) {
    return res.status(400).json({ message: "id is invalid", data: null });
  }
  if (!age || !name) {
    return res.status(400).json({ message: "age and name is required" });
  }
  if (age < 10 || age > 30) {
    return res.status(400).json({ message: "Age must be between 10 and 30" });
  }
  users[index] = {
    ...users[index],
    age: age || users[index].age,
    name: name || users[index].name,
    email: email || users[index].email,
    eyeColor: eyeColor || users[index].eyeColor,
  };
  return res.json({ message: "updated successfully", data: users[index] });
});


app.get("/secret", (req, res) => {
  console.log(req.headers);
  const secretKey = req.headers.secretkey;
  if (!secretKey || secretKey !== "12122002") {
    return res
      .status(400)
      .json({ message: "key is missing or incorrect", data: null });
  }

  res.json({ message: "secret info...." });
});




app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`),
);
