const express = require("express");
const { Category } = require("../models");
const router = express.Router();

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
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

module.exports = router;
