const express = require("express");
const router = express.Router();
// There is a bug in line 4 you need to fix it
const taskModel = require("../models/taskModel");
//It isn't going to work because it doesn't have an s
//Write a comment describing the purpose of this route
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// Write a comment describing the purpose of this route
router.post("/", async (req, res) => {
  //there is a bug in line 15 you need to fix
  const { title, description } = req.body;
  const task = await taskModel.addTask(title, description);
  //It doesn't work because the tasks don't match up
  res.status(201).json(task);
});

module.exports = router;
