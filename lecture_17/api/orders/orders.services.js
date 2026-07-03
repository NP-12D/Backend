import { json } from "express";

const orders = [
  {
    id: 0,
    productName: "apple",
    quantity: 5,
    totalPrice: 15,
    status: "pending",
  },
  {
    id: 1,
    productName: "banana",
    quantity: 10,
    totalPrice: 20,
    status: "completed",
  },
  {
    id: 2,
    productName: "orange",
    quantity: 3,
    totalPrice: 12,
    status: "pending",
  },
  {
    id: 3,
    productName: "milk",
    quantity: 2,
    totalPrice: 10,
    status: "shipped",
  },
  {
    id: 4,
    productName: "bread",
    quantity: 4,
    totalPrice: 8,
    status: "completed",
  },
  {
    id: 5,
    productName: "carrot",
    quantity: 12,
    totalPrice: 12,
    status: "pending",
  },
  {
    id: 6,
    productName: "tomato",
    quantity: 6,
    totalPrice: 12,
    status: "shipped",
  },
  {
    id: 7,
    productName: "chicken",
    quantity: 2,
    totalPrice: 16,
    status: "completed",
  },
  { id: 8, productName: "rice", quantity: 1, totalPrice: 6, status: "pending" },
  {
    id: 9,
    productName: "cheese",
    quantity: 1,
    totalPrice: 15,
    status: "shipped",
  },
];

export const getOrders = (req, res) => {
  console.log(req.query);
  let { page = 1, take = 3 } = req.query;
  take > 3 ? (take = 3) : take;
  const result = orders.slice((page - 1) * take, page * take);
  res.json({ message: "orders", data: result });
};
export const getOrderById = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  let findOrder = orders.find((order) => order.id === +id);
  if (!findOrder) {
    return res.status(404).json({ message: "id is invalid", data: null });
  }
  res.json({ message: "order info", data: findOrder });
};
export const addOrder = (req, res) => {
  console.log(req.body);
  const { productName, quantity, totalPrice, status } = req.body;
  if (!productName) {
    return res
      .status(400)
      .json({ message: "ProductName is required filde", data: null });
  }
  if (quantity > 10 || totalPrice > 500) {
    return res.status(400).json({
      message: "quntity should be less then 10 and totalprice also < 500",
      data: null,
    });
  }
  let lastId = orders[orders.length - 1]?.id || 0;
  let newOrder = {
    id: lastId + 1,
    productName,
    quantity,
    totalPrice,
    status,
  };
  orders.push(newOrder);
  res.json({ message: "order added successfully", data: newOrder });
};
export const deleteOrder = (req, res) => {
  const { id } = req.params;
  let index = orders.findIndex((order) => order.id === +id);
  if (index === -1) {
    return res.status(404).json({ message: "id is invalid", data: null });
  }
  let deleteOrder = orders.splice(index, 1);
  res.json({ message: "deleted successfully", data: deleteOrder });
};

export const updateOrder = (req, res) => {
  const { id } = req.params;
  let index = orders.findIndex((order) => order.id === +id);
  if (index === -1) {
    return res.status(404).json({ message: "id is invalid", data: null });
  }
  const { productName, quantity, totalPrice, status } = req.body;
  if (!productName) {
    return res
      .status(400)
      .json({ message: "ProductName is required filde", data: null });
  }
  if (quantity > 10 || totalPrice > 500) {
    return res.status(400).json({
      message: "quntity should be less then 10 and totalprice also <500",
      data: null,
    });
  }
  orders[index] = {
    ...orders[index],
    productName: productName || orders[index].productName,
    quantity: quantity || orders[index].quantity,
    totalPrice: totalPrice || orders[index].totalPrice,
    status: status || orders[index].status,
  };
  res.json({ message: "updated successfully", data: orders[index] });
};

export const updateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
    let index = orders.findIndex((order) => order.id === +id);
  if (index === -1) {
    return res.status(404).json({ message: "id is invalid", data: null });
  }

  if (!status) {
    return res.status(400).json({ message: "status is required", data: null });
  }
  orders[index] = {
    ...orders[index],
    status: status,
  };

  res.json({ message: "status updated successfully", data: orders[index] });
};
