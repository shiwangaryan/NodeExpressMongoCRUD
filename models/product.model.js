const mongoose = require("mongoose");

// defines the schema i.e. data model definition for the product collection
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// create a model for the product collection
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
