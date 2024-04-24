const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Category, { model: Tag, through: ProductTag }],
    });
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET one product by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [Category, { model: Tag, through: ProductTag }],
    });
    if (!product) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST a new product
// The code for this route is already provided in your question

// PUT update a product by its `id` value
// The code for this route is already provided in your question

// DELETE a product by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!product) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
