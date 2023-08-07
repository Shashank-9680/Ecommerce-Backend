const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./controller/Product");
const productRouter = require("./routes/Product");
const categoriesRouter = require("./routes/Category");
const brandsRouter = require("./routes/Brands");
const cors = require("cors");
main().catch((err) => console.log(err));
server.use(express.json());
server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
server.use("/products", productRouter.router);
server.use("/categories", categoriesRouter.router);
server.use("/brands", brandsRouter.router);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database connnected");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});
server.post("/products", createProduct);
server.listen(8080, () => {
  console.log("server started");
});