const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// GET all tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.json(tags);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET one tag by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    if (!tag) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.json(tag);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST a new tag
router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PUT update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tag) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.json(tag);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE a tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tag) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.json(tag);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
