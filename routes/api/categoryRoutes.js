const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [Product],
    });
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET one category by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [Product],
    });
    if (!category) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }
    res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST a new category
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PUT update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!category) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }
    res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!category) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }
    res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
