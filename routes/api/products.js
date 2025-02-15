const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const uuid = require("uuid");
const path = require("path");
const fileUpload = require("express-fileupload");
// @route   GET api/products
// @desc    GET all products
// @access  Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.send(500).send("Server Error");
  }
});

// @route   GET api/products/:id
// @desc    GET single product
// @access  Private
router.get("/:id", auth, async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) {
      return res.status(400).json({ msg: "No product found" });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.send(500).send("Server Error");
  }
});

// @route   POST api/products
// @desc    Add Products
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("desc", "Description is required").not().isEmpty(),
      check("price", "Price is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, desc, price } = req.body;
    try {
      let product = new Product({
        name,
        desc,
        price,
      });
      await product.save();
      res.json({
        product,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/products/:id/get-image
// @desc    Get Image
// @access  Private
router.get("/:id/get-image", auth, async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) {
      return res.status(400).json({ msg: "No image found" });
    }
    res.json({
      filePath: product.image,
      fileName: product.imageName,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
});

// @route   POST api/products/:id/add-image
// @desc    Add Image
// @access  Private
router.post("/:id/add-image", auth, async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  try {
    file.mv(`client/public/uploads/${file.name}`);

    await Product.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { image: `/uploads/${file.name}`, imageName: file.name } },
      { new: true }
    );
    res.json({
      fileName: file.name,
      filePath: `/uploads/${file.name}`,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
});
// @route   PUT api/products/:id
// @desc    Update Product
// @access  Private
router.put(
  "/:id",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("desc", "Description is required").not().isEmpty(),
      check("price", "Price is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, desc, price, image } = req.body;
    try {
      let product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { name, desc, price } },
        { new: true }
      );
      return res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE api/products/:id
// @desc    Delete Product
// @access  Private

router.delete("/:id", auth, async (req, res) => {
  try {
    await Product.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Product deleted" });
  } catch (err) {
    console.error(err.message);
    res.send(500).send("Server Error");
  }
});

module.exports = router;
