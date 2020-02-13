/* IMPORTING MODULES */
const express = require("express");
const projectControllers = require("../controllers/projects.controller");

/* CREATING A ROUTING FUNCTION */
const router = express.Router();

/* ROUTES */
router.post("/add", projectControllers.addNewProject);
router.patch("/update/:projectId", projectControllers.updateProject);
router.delete("/delete/:projectId", projectControllers.deleteProject);
router.get("/getAllProjects", projectControllers.getAllProjects);

module.exports = router;