const Product = require("../models/product.model.js");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.status(200).send(product);
};

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product); // here we can also use send function instead of json because we are sending the object
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).send("product not found");
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).send("product not found");
    }
    res.status(200).send("product deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
