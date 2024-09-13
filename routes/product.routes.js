const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// ----------------------------READ----------------------------
// get method to get all products added in db
router.get("/", getAllProducts);

router.get("/:id", getProductById);

// ----------------------------WRITE----------------------------
// post method to add a product
router.post("/", addProduct);

// ----------------------------UPDATE----------------------------
// put method to update a product
router.put("/:id", updateProduct);

// ----------------------------DELETE----------------------------
// delete method
router.delete("/:id", deleteProduct);

module.exports = router;
