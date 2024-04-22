const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

// // GET all categories
// router.get("/", async (req, res) => {
//   try {
//     const categories = await Category.findAll();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// // POST a new category
// router.post("/", async (req, res) => {
//   try {
//     const newCategory = await Category.create(req.body);
//     res.status(201).json(newCategory);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// module.exports = router;
