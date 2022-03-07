const {
  canceled,
  confirmed,
  fulfilled,
  createOrder,
  getOrder,
  getOrders,
  meOrder,
  getMYOrderByID,
} = require("../controllers/order.controllers");
const isAdmin = require("../middlewares/isAdmin");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();

router.put("/canceled/:orderId", verifyToken, isAdmin, canceled);
router.put("/confirmed/:orderId", verifyToken, isAdmin, confirmed);
router.put("/fulfilled/:orderId", verifyToken, isAdmin, fulfilled);

router.get("/me", verifyToken, meOrder);
router.post("/", verifyToken, createOrder);

router.get("/getMYOrderByID/:orderId", verifyToken,getMYOrderByID);
router.get("/:orderId", verifyToken,isAdmin,getOrder);
router.get("/", verifyToken, isAdmin,getOrders);

module.exports = router;
