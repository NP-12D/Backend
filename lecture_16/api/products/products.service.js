const products = [
  { id: 0, name: "apple", price: "3", category: "fruit", isExpire: false },
  { id: 1, name: "banana", price: "2", category: "fruit", isExpire: false },
  { id: 2, name: "orange", price: "4", category: "fruit", isExpire: false },
  { id: 3, name: "milk", price: "5", category: "dairy", isExpire: true },
  { id: 4, name: "bread", price: "2", category: "bakery", isExpire: true },
  { id: 5, name: "carrot", price: "1", category: "vegetable", isExpire: false },
  { id: 6, name: "tomato", price: "2", category: "vegetable", isExpire: false },
  { id: 7, name: "chicken", price: "8", category: "meat", isExpire: true },
  { id: 8, name: "rice", price: "6", category: "grain", isExpire: false },
  { id: 9, name: "cheese", price: "15", category: "dairy", isExpire: true },
];

export const getProd = (req, res) => {
  console.log(req.query);
  let { page = 1, take = 5 } = req.query;
  take > 5 ? (take = 5) : take;
  res.json({
    message: "product info",
    data: products.slice((page - 1) * take, page * take),
  });
};
export const getById = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  let findById = products.find((prod) => prod.id === +id);
  if (!findById) {
    return res.status(404).json({ message: "id is invalid", data: null });
  }
  res.json({ message: "product info", data: findById });
};
export const addProd = (req, res) => {
  console.log(req.body);
  const { name, price, category, isExpire } = req.body;
  if (!price || !category || isExpire == null || !name) {
    return res.status(400).json({
      message: "price, category ,isExpire and  name are required fields",
      data: null,
    });
  }
  if (+price > 200) {
    return res.status(400).json({
      message: "price must be < 200",
      data: null,
    });
  }
  let lastId = products[products.length - 1]?.id || 0;
  let newObj = {
    id: lastId + 1,
    name,
    price,
    category,
    isExpire,
  };
  products.push(newObj);
  res.json({ message: "product added successfully", data: newObj });
};

export const deleteById = (req, res) => {
  const { id } = req.params;
  let index = products.findIndex((prod) => prod.id === +id);
  if (index === -1) {
    return res.status(404).json({ message: "id is invalid", data: null });
  }
  let deletedProd = products.splice(index, 1);
  res.json({ message: "product deleted successfully", data: deletedProd });
};

export const updateProd = (req, res) => {
  const { id } = req.params;
  let index = products.findIndex((prod) => prod.id === +id);
  if (index === -1) {
    return res.status(404).json({ message: "id is invalid", data: null });
  }
  const { name, price, category, isExpire } = req.body;
  if (!name ||!price) {
    return res.status(400).json({
      message: "price and name are  required fields",
      data: null,
    });
  }
  if (+price > 200) {
    return res.status(400).json({
      message: "price must be < 200",
      data: null,
    });
  }
  products[index] = {
    ...products[index],
    name: name,
    price: price,
    category: category || products[index].category,
    isExpire: isExpire ?? products[index].isExpire,
  };
  res.json({ message: "updated successfully", data: products[index] });
};
