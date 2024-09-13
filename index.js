const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.routes.js");
const uri =
  "mongodb+srv://shiwangaryan:kEHR3TVx6fpOANhJ@backenddb.afgqt.mongodb.net/CRUD?retryWrites=true&w=majority&appName=BackendDB";

// express object
const app = express();

// create a mongoose object & connect to the database:
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to db");
    app.listen(3000, () => {
      console.log("server is running on 3000");
    });
  })
  .catch((err) => {
    console.log(`error encountered: ${err}`);
  });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api/products", productRoute);

// get method to test the server
// app.get("/", (req, res) => {
//   console.log("hello from node");
//   res.send("request sent!!");
// });

// // ----------------------------WRITE----------------------------
// // post method to add a product
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(201).json(product); // here we can also use send function instead of json because we are sending the object
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ----------------------------READ----------------------------
// // get method to get all products added in db
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).send(products);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   const { id } = req.params;
//   const product = await Product.findById(id);
//   res.status(200).send(product);
// });

// // ----------------------------UPDATE----------------------------
// // put method to update a product
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       return res.status(404).send("product not found");
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ----------------------------DELETE----------------------------
// // delete method
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(404).send("product not found");
//     }
//     res.status(200).send("product deleted");
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
