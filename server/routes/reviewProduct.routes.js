const { addReview } = require("../controllers/reviewProduct.controller");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();

router.post("/:productId",verifyToken, addReview);

module.exports = router;
