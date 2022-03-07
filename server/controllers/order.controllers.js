const Order = require("../models/order.models");
const Cart = require("../models/cart.models");

const createOrder = async (req, res) => {
  const cart = await Cart.findById(req.verifiedUser.cart);
  const newOrder = new Order({
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalPriceWithTax: cart.totalPriceWithTax,
    taxPercentage: cart.taxPercentage,

    address: req.verifiedUser.address,
    client: req.verifiedUser._id,
  });

  try {
    const savedOrder = await newOrder.save();
    return res.status(201).json(savedOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getOrder = async (req, res) => {
  const id = req.params.orderId;
  try {
    const getOrder = await Order.findById(id);
    return res.status(200).json(getOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getMYOrderByID = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const order = await Order.findById(orderId);
    currentUser = req.verifiedUser._id;
    console.log(currentUser);
    if (order.client!= currentUser) {
      return res.status(401).json("you dent have any order with this id");
    }

    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const meOrder = async (req, res) => {
  const userId = req.verifiedUser._id;
  try {
    const order = await Order.find({ client: userId });
    const orderLength = order.length;
    if (orderLength === 0) {
      return res.status(401).json("no order");
    }
    //!result mech mnadma
    //return res.status(200).json(`find  ${orderLength}  order  ${order}`);
    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json();
  }
};

const getOrders = async (req, res) => {
  try {
    const getOrders = await Order.find();
    return res.status(200).json(getOrders);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const canceled = async (req, res) => {
  const OrderId = req.params.orderId;
  try {
    const canceledOrder = await Order.findByIdAndUpdate(
      OrderId,
      { status: "canceled" },
      { new: true }
    );
    return res.status(200).json(canceledOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const confirmed = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const confirmed = await Order.findByIdAndUpdate(
      orderId,
      { status: "confirmed" },
      { new: true }
    );
    return res.status(200).json(confirmed);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const fulfilled = async (req, res) => {
  const orderId = req.params.OrderId;
  try {
    const fulfilledOrder = await Order.findByIdAndUpdate(
      orderId,
      { status: "fulfilled" },
      { new: true }
    );
    return res.status(200).json(fulfilledOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.createOrder = createOrder;
module.exports.getOrder = getOrder;
module.exports.getOrders = getOrders;
module.exports.meOrder = meOrder;
module.exports.canceled = canceled;
module.exports.confirmed = confirmed;
module.exports.fulfilled = fulfilled;
module.exports.getMYOrderByID = getMYOrderByID;
