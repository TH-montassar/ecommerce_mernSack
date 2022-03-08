const Review = require("../models/reviewProduct.models");

const Product = require("../models/product.models");

const addReview = async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findById({ _id: productId });
    if (!product) {
      return res.status(422).json("product  no found ");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
  try {
    const newReview = new Review({
      user: req.verifiedUser._id,
      product: productId,
      review: req.body.review
    });
    const savedReview = await newReview.save();
    return res.status(201).json(savedReview);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.addReview = addReview;
