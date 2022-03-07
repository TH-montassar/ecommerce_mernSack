const Admin = require("../models/admin.models");
const bcrypt = require("bcryptjs");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
router.post("/login", async (req, res) => {
  email = req.body.email;
  password = req.body.password;
  try {
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res.status(401).json("wrong email or password ");
    }
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json("wrong email or password ");
    }

    const token = jwt.sign(
      {
        _id: admin._id,
        email: admin.email,
        firstName: admin.firstName,
        lastName: admin.lastName,

        isAdmin: admin.isAdmin,
      },
      process.env.TOKEN_KEY,
      { expiresIn: "3 days" }
    );
    return res.status(200).json({ admin: admin, token: token });
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.post("/addAdmin", verifyToken, isAdmin, async (req, res) => {
  const email = req.body.email;
  try {
    const admin = await Admin.findOne({ email: email });
    if (admin) {
      return res.status(422).json("Email already exist");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
  //*cripte passworde
  const salt = await bcrypt.genSalt(16);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  try {
    const newAdmin = new Admin({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      createdBy: req.verifiedUser._id,
    });
    const savedAdmin = await newAdmin.save();
    return res.status(201).json(savedAdmin);
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.delete("/:deleteAdminId", verifyToken, isAdmin, async (req, res) => {
  const adminId = req.params.deleteAdminId;
  try {
    const deleteAdmin = await Admin.findByIdAndDelete(adminId);
    return res.status(200).json(deleteAdmin);
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.put("/:updateAdmin", verifyToken, isAdmin, async (req, res) => {
  const currentAdmin = req.verifiedUser._id;

  try {
    const salt = await bcrypt.genSalt(16);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    const updatedAdmin = await Admin.findByIdAndUpdate(
      currentAdmin,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password:hashedPassword
      },
      { new: true }
    );
    return res.status(200).json(updatedAdmin);
  } catch (err) {
    return res.status(404).json(err);
  }
});
router.get("/allAdmin", verifyToken, isAdmin, async (req, res) => {
  try {
    const admin = await Admin.find();
    return res.status(200).json(admin);
  } catch (err) {
    return res.status(404).json(err);
  }
});
module.exports = router;
