const express = require("express");
const router = express.Router();
const crudController = require("../crudController/crudController");

router.get("/", crudController.CRUD_INDEX);
router.post("/", crudController.CRUD_CREATE);
router.get("/:id", crudController.CRUD_GET_ID);
router.patch("/:id", crudController.CRUD_UPDATE_ID);
router.delete("/:id", crudController.CRUD_DELETE_ID);

module.exports = router;
