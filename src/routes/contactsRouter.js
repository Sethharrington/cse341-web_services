const router = require("express").Router();
const connectDB = require("../database/connect");

const contactsController = require("../controllers/contactsController");
router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getById);
module.exports = router;
